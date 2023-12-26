import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ImageGenerateParams } from 'openai/resources'

type Defined<T> = T extends undefined ? never : T

export type Model = Defined<ImageGenerateParams['model']>
export type Quality = Defined<ImageGenerateParams['quality']>
export type Style = Defined<ImageGenerateParams['style']>
export type Size = `1024x1024` | `1792x1024` | `1024x1792`
export type NoImage = Defined<ImageGenerateParams['n']>

type ConfigStore = {
  apiKey: string
  setAPIKey: (key: string) => void

  quality: Quality
  setQuality: (quality: Quality) => void

  style: Style
  setStyle: (style: Style) => void

  size: Size
  setSize: (style: Size) => void

  model: Model
  setModel: (model: Model) => void

  noImage: NoImage
  setNoImage: (noImage: NoImage) => void

  reset: () => void
}

const DEFAULT_CONFIG: Pick<ConfigStore, 'model' | 'quality' | 'size' | 'style' | 'noImage'> = {
  model: 'dall-e-3',
  quality: 'standard',
  style: 'vivid',
  size: '1024x1024',
  noImage: 1,
}

export const useConfigStore = create(
  persist<ConfigStore>(
    (set) => ({
      ...DEFAULT_CONFIG,
      apiKey: '',
      setModel(model) {
        set({ model })
      },
      setAPIKey(key) {
        set({ apiKey: key })
      },
      setQuality(quality) {
        set({ quality })
      },
      setStyle(style) {
        set({ style })
      },
      setSize(size) {
        set({ size })
      },
      setNoImage(noImage) {
        set({ noImage })
      },
      reset() {
        set({ ...DEFAULT_CONFIG })
      },
    }),
    {
      name: 'config-storage',
    },
  ),
)
