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
  export const typescript(config: any): PreprocessObject,
  export const pug(config: any): PreprocessObject,
  export const scss(config: any): PreprocessObject,
  export const sass(config: any): PreprocessObject,
  export const postcss(config: any): PreprocessObject,
  export const less(config: any): PreprocessObject,
  export const stylus(config: any): PreprocessObject
}
