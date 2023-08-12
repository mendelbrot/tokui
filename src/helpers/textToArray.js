import { Str } from '@supercharge/strings'

const textToArray = (text) => Str(text).lines().words().get()

export default textToArray