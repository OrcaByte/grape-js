import { Editor } from "grapesjs";

import GjsEditor from '@grapesjs/react';
import tuiImgEditor from 'grapesjs-tui-image-editor';


const Studio = () => {
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
  )
}

export default Studio;