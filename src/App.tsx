import GjsEditor from '@grapesjs/react';
import type { Editor } from 'grapesjs';
import tuiImgEditor from 'grapesjs-tui-image-editor';

export default function App() {
  const onEditor = (editor: Editor) => {
    console.log('Editor loaded', { editor });
  };

  return (
    <div>
      <GjsEditor
        grapesjs="https://unpkg.com/grapesjs"
        options={{
          height: '100vh',
          storageManager: false,
        }}
        plugins={[
          {
            id: 'gjs-blocks-basic',
            src: 'https://unpkg.com/grapesjs-blocks-basic',
          },
          tuiImgEditor,
        ]}
        onEditor={onEditor}
      />
    </div>
  );
}
