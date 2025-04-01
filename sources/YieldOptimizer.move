module YieldMasterAI::YieldOptimizer {
    use std::signer;
    use aptos_framework::coin;
    use aptos_framework::aptos_coin::AptosCoin;
    use aptos_framework::timestamp;

    // Error codes
    const E_NOT_INITIALIZED: u64 = 1;
    const E_VAULT_NOT_INITIALIZED: u64 = 2;

    // Resource to store user deposits and yield data
    struct UserDeposit has key, store {
        amount: u64, // Amount of APT deposited
        deposit_time: u64, // Timestamp of deposit
        yield_rate: u64, // Fixed yield rate (in basis points, e.g., 1000 = 10%)
    }

    // Resource to store the contract's vault of APT
    struct Vault has key {
        coins: coin::Coin<AptosCoin>,
    }

    // Initialize the contract (called once by the deployer)
    public entry fun initialize(account: &signer) {
        let signer_addr = signer::address_of(account);
        // Ensure the resource doesn't already exist
        if (!exists<UserDeposit>(signer_addr)) {
            move_to(account, UserDeposit {
                amount: 0,
                deposit_time: 0,
                yield_rate: 1000, // 10% APY (1000 basis points)
            });
        };
        // Initialize the vault
        if (!exists<Vault>(signer_addr)) {
            move_to(account, Vault {
                coins: coin::zero<AptosCoin>(),
            });
        };
    }

    // Deposit APT into the yield pool
    public entry fun deposit(account: &signer, amount: u64) acquires UserDeposit, Vault {
        let signer_addr = signer::address_of(account);
        let contract_addr = @YieldMasterAI;
        
        // Ensure the user has a deposit resource
        if (!exists<UserDeposit>(signer_addr)) {
            move_to(account, UserDeposit {
                amount: 0,
                deposit_time: 0,
                yield_rate: 1000,
            });
        };

        // Ensure the vault exists
        assert!(exists<Vault>(contract_addr), E_VAULT_NOT_INITIALIZED);

        let deposit = borrow_global_mut<UserDeposit>(signer_addr);
        let vault = borrow_global_mut<Vault>(contract_addr);
        
        // Withdraw APT from user and deposit into the vault
        let coins = coin::withdraw<AptosCoin>(account, amount);
        coin::merge(&mut vault.coins, coins);
        
        // Update deposit details
        deposit.amount = deposit.amount + amount;
        deposit.deposit_time = timestamp::now_seconds();
    }

    // Calculate yield (mock calculation based on time elapsed)
    public fun calculate_yield(deposit: &UserDeposit): u64 {
        let current_time = timestamp::now_seconds();
        let time_elapsed = current_time - deposit.deposit_time; // In seconds
        
        // Mock yield: (amount * yield_rate * time_elapsed) / (365 days * 24 hours * 3600 seconds * 10000 basis points)
        let yield = (deposit.amount * deposit.yield_rate * time_elapsed) / (365 * 24 * 3600 * 10000);
        yield
    }

    // Withdraw funds with calculated yield
    public entry fun withdraw(account: &signer) acquires UserDeposit, Vault {
        let signer_addr = signer::address_of(account);
        let contract_addr = @YieldMasterAI;
        assert!(exists<UserDeposit>(signer_addr), E_NOT_INITIALIZED); // Ensure user has a deposit
        assert!(exists<Vault>(contract_addr), E_VAULT_NOT_INITIALIZED); // Ensure vault exists

        let deposit = borrow_global_mut<UserDeposit>(signer_addr);
        let vault = borrow_global_mut<Vault>(contract_addr);
        let amount = deposit.amount;
        let yield = calculate_yield(deposit);
        let total = amount + yield;

        // Reset deposit
        deposit.amount = 0;
        deposit.deposit_time = timestamp::now_seconds(); // Set to current time to avoid issues with future deposits

        // Extract the total amount from the vault and transfer to user
        let coins = coin::extract(&mut vault.coins, total);
        coin::deposit(signer_addr, coins);
    }

    // View function to check user balance and yield
    public fun get_balance_and_yield(account_addr: address): (u64, u64) acquires UserDeposit {
        assert!(exists<UserDeposit>(account_addr), E_NOT_INITIALIZED);
        let deposit = borrow_global<UserDeposit>(account_addr);
        let yield = calculate_yield(deposit);
        (deposit.amount, yield)
    }
}