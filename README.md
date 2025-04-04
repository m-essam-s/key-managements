# Key Management System: Diffie-Hellman & ElGamal Cipher

This project is a **Key Management System** built using **React**, **TypeScript**, and **Vite**. It implements cryptographic techniques like **Diffie-Hellman Key Exchange** and **ElGamal Encryption** to demonstrate secure communication concepts. The application provides an interactive UI for users to input parameters and visualize the cryptographic processes.

## Features

- **Diffie-Hellman Key Exchange**:
  - Allows users to compute shared secret keys using public and private information.
  - Interactive input fields for parameters like prime numbers and generators.
  
- **ElGamal Encryption**:
  - Encrypt and decrypt messages using the ElGamal cryptographic algorithm.
  - Visualize the encryption and decryption process with dynamic UI updates.

- **Responsive Design**:
  - Built with TailwindCSS for a clean and responsive user interface.

- **Modular Arithmetic Utilities**:
  - Includes utility functions for modular exponentiation and modular inverse calculations.

## Project Structure

The project is organized as follows:

```plaintext
key-managements/ 
├── public/ 
│   └── key.png # Static assets 
├── src/ 
│   ├── component/ 
│   │   ├── Layout.tsx # Layout component for consistent styling 
│   │   └── Navbar.tsx # Navbar with navigation links 
│   ├── routes/ 
│   │   ├── DiffieHellman.tsx # Diffie-Hellman implementation 
│   │   ├── ElGamal.tsx # ElGamal encryption implementation 
│   │   └── Home.tsx # Home page 
│   ├── utils/ 
│   │   └── math.ts # Utility functions for modular arithmetic 
│   ├── App.tsx # Main application component 
│   ├── App.css # Global styles 
│   ├── index.css # TailwindCSS configuration 
│   ├── main.tsx # Application entry point 
│   └── vite-env.d.ts # Vite environment types 
├── .gitignore # Git ignore file 
├── eslint.config.js # ESLint configuration 
├── index.html # HTML template 
├── package.json # Project dependencies 
├── README.md # Project documentation 
├── tsconfig.app.json # TypeScript configuration for the app 
├── tsconfig.json # Base TypeScript configuration 
├── tsconfig.node.json # TypeScript configuration for Node.js 
└── vite.config.ts # Vite configuration
```

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/m-essam-s/key-managements.git
   cd key-managements
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to view the application.

## Usage

### Diffie-Hellman Key Exchange

1. Navigate to the Diffie-Hellman page.
2. Input values for:
   - Prime number (p)
   - Generator (g)
   - Private keys for Alice and Bob
3. View the computed shared secret key.

### ElGamal Encryption

1. Navigate to the ElGamal page.
2. Input values for:
   - Prime number (p)
   - Generator (g)
   - Private key for Alice
   - Random number for encryption
   - Message to encrypt
3. View the encrypted message and the decrypted result.

## Utilities

The project includes utility functions for cryptographic calculations:

- `powMod(base, exp, mod)`: Computes `(base^exp) % mod` efficiently.
- `inverseMod(a, mod)`: Computes the modular inverse of `a` under modulo `mod`.

These functions are located in `src/utils/math.ts`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## Acknowledgments

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript.
- [Vite](https://vitejs.dev/) - Fast build tool and development server.
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework.
