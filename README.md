# @helixml/apps-client

![helix logo](docs/helix_logo.png)

The `@helixml/apps-client` is the client library to interact with apps hosted on [Helix Cloud](https://tryhelix.ai).

### Installation

To use the `@helixml/apps-client` in your project, install it via npm:

```bash
npm install @helixml/apps-client
```

or using yarn:

```bash
yarn add @helixml/apps-client
```

### Usage

Import and use the `AppClient` component in your React application:

```jsx
import { useCallback } from 'react';
import AppClient from '@helixml/apps-client';

const app = AppClient({
  // this api token is for a Helix app that has been linked to github.
  token: 'APP_API_TOKEN',
})

function App() {
  const handleBackend = useCallback(async () => {
    const result = await app.runScript({
      file_path: '/gptscripts/helloworld.gpt',
      input: 'Oranges',
    });

    if(result.error) {
      throw new Error(result.error);
    } else {
      alert(result.output);
    }
  }, []);

  return (
    <div className="App">
      <button
        onClick={ handleBackend }
      >
        Run a cool GPTScript
      </button>
    </div>
  );
}

export default App;
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
