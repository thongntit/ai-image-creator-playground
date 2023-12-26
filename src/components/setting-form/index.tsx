import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from 'src/components/ui/select'
import { Quality, Size, Style, useConfigStore, Model, NoImage } from 'src/stores/config'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { HelpCircle } from 'lucide-react'

const models: Model[] = ['dall-e-3', 'dall-e-2']
const noImages: NoImage[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sizes: Size[] = ['1024x1024', '1792x1024', '1024x1792']
const qualities: Quality[] = ['standard', 'hd']
const styles: Style[] = ['vivid', 'natural']

export const SettingForm = () => {
  const {
    noImage,
    setNoImage,
    model,
    setModel,
    quality,
    setQuality,
    size,
    setSize,
    style,
    setStyle,
    apiKey,
    setAPIKey,
    reset,
  } = useConfigStore()

  return (
    <div className="flex w-full flex-col space-y-4">
      <div className="flex items-center justify-start border-b border-gray-200">
        Settings
        <Button size={'icon'} asChild variant={'ghost'}>
          <a href="https://platform.openai.com/docs/api-reference/images/create" target="_blank" rel="noreferrer">
            <HelpCircle size={16} />
          </a>
        </Button>
      </div>

      <div>
        <label className="block py-2">Model</label>
        <Select value={model || 'dall-e-3'} onValueChange={(value) => setModel(value as Model)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Model" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {models.map((item) => (
                <SelectItem value={item || 'dall-e-3'} key={item}>
                  {item?.toUpperCase()}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block py-2">Quality</label>
        <Select value={quality} onValueChange={(value) => setQuality(value as Quality)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Quality" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {qualities.map((item) => (
                <SelectItem value={item} key={item}>
                  {item?.toUpperCase()}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block py-2">Size</label>
        <Select value={size} onValueChange={(value) => setSize(value as Size)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {sizes.map((item) => (
                <SelectItem value={item} key={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block py-2">Style</label>
        <Select value={style!} onValueChange={(value) => setStyle(value as Style)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Style" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {styles.map((item) => (
                <SelectItem value={item!} key={item}>
                  {item?.toUpperCase()}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block py-2">Number of Images</label>
        <Select
          value={`${noImage || 1}`}
          onValueChange={(value) => setNoImage(Number(value) as NoImage)}
          disabled={model === 'dall-e-3' ? true : false}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Style" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {noImages.map((item) => (
                <SelectItem value={`${item}`} key={item}>
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="block py-2">API Key</label>
        <Input value={apiKey} onChange={(e) => setAPIKey(e.target.value)} type="password"></Input>
      </div>

      <div className="flex justify-end">
        <Button onClick={reset} variant={'link'} className="underline">
          Reset to default
        </Button>
      </div>
    </div>
  )
}
