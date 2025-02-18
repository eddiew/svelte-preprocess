type PreprocessObject = {
  markup: Function
  script: Function
  style: Function
}

type Result = {
  code: string
  map?: object
}

type Transformer = ({
  content,
  filename,
}: {
  content: string
  filename?: string
}) => Result | Promise<Result>

type TransformersOptions = {
  [languageName: string]: boolean | object | Transformer
}

type Options<TransformersOptions> = {
  onBefore?: Transformer
  transformers?: TransformersOptions
  aliases: Array<[string, string]>
  preserve: Array<string>
}

declare module 'svelte-preprocess' {
  export default function preprocess(config: Options): PreprocessObject,
  export const typescript(config?: any): Transformer,
  export const pug(config?: any): Transformer,
  export const scss(config?: any): Transformer,
  export const sass(config?: any): Transformer,
  export const postcss(config?: any): Transformer,
  export const less(config?: any): Transformer,
  export const stylus(config?: any): Transformer
}
