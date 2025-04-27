// src/services/auth.ts

// Simulates a login API request
export const login = async (username: string, password: string): Promise<boolean> => {
    // Replace with real API call
    await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate network delay
  
    // Temporary hardcoded user
    if (username === 'admin' && password === '123456') {
      return true;
    }
  
    return false;
  };
  