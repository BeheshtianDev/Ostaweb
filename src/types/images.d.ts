declare module '*.svg?component' {
    import * as React from 'react';
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}

declare module '*.svg' {
    const content: string;
    export default content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.webp';
