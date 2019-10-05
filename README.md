# RuntimeLabs
A repo containing experiments, patterns, and labs aimed at explaining and improving the Runtime framwork.


## Getting Started with a compatible Development Environment

---

- Ensure that [NodeJS](https://nodejs.org/en/) is installed on your system. Please ensure that you install Node v12 or higher for latest javascript features.

- Download any lightweight development IDE such as [Atom](https://atom.io/) or [VSCode](https://code.visualstudio.com/)

- Download [Github Desktop](https://desktop.github.com/), authenticate, and clone the Mesh Authentication Repo onto your local filesystem.

- Open the project root inside of your IDE and launch terminal. If you are using VSCode you will first need to add the [Terminal](https://marketplace.visualstudio.com/items?itemName=formulahendry.terminal) extension.

## Terminal CLI and Getting started with the development server.

---

- To install necessary module dependencies, open the terminal at the project root and run the following command.

```
npm install
```

- Once the dependencies are installed to launch the development environment, again in the terminal, run following command.

```
npm run dev
```

- Once the command executes the terminal should report that the project is running at [localhost:8081](http://localhost:8081)

An example of the terminal output at this time should look as follows:

```

11:47:41 AM - Starting compilation in watch mode...
[0]
[1] es-dev-server started on http://localhost:8081
[1] Serving files from '/Users/User/Documents/GitHub/mesh-framework-authentication'.
[1] Using history API fallback, redirecting non-file requests to '/index.html'
[0]
[0] 11:47:42 AM - Found 0 errors. Watching for file changes.

```

## Viewing The Development Server

---

Simply launch one of the supported development browsers and open [localhost:8081](http://localhost:8081)

### Known Supported Development Browsers

- [x] Firefox
- [x] Chrome
- [x] Safari
- [ ] Edge\* Development server fails to import ES Modules Issue Being Investigated

## Configuring and Connecting your Firebase Project

---

Details coming soon.
