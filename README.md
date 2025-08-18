# 🔐 DevSecOps Demo: Secure CI/CD Pipeline for a Web App

![CI](https://github.com/simran639/devsecops-demo/actions/workflows/security-ci.yml/badge.svg)

A beginner-friendly **DevSecOps project** that demonstrates how to integrate **security into every stage of the CI/CD pipeline** for a simple Node.js web application.

This project shows how modern DevSecOps practices help detect:
- 🔎 Insecure code (SAST)  
- 🕵️ Secret leaks  
- 📦 Vulnerable dependencies  
- 🐳 Insecure Docker images  
- 🌐 Runtime vulnerabilities (DAST)  
- 📑 Software Bill of Materials (SBOM)  

---

## 📂 Project Structure
devsecops-demo/
├── src/app.js # Simple Express.js web app
├── test/app.test.js # Basic health check test
├── package.json # App dependencies and scripts
├── .eslintrc.json # Linting rules (code quality)
├── Dockerfile # Secure multi-stage container build
├── .gitignore # Ignore node_modules, logs, etc.
├── .gitleaks.toml # Secrets scanning config
├── .semgrep.yml # Static analysis (SAST) rules
├── .github/workflows/
│ └── security-ci.yml # CI/CD pipeline with security gates
└── README.md # Project documentation
