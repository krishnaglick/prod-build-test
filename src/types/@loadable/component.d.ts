declare module "@loadable/component" {
    import React from "react";
    export function loadableReady(cb: () => void): void;
    export function loadable<T>(cb: (props: T) => void): typeof React.Component;
    export function lazy<T>(cb: (props: T) => void): typeof React.Component;
    export default loadable;
}
