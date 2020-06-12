// `./myOwnTheme.js`
const TInput = {
  // Notice that this will override the full `baseClass` setting so probably you want to keep some
  // of the classes and just replace the ones you want to override.
  // baseClass: 'border block w-full rounded',
  baseClass: 'border-2 border-blue-500 block w-full rounded text-sm p-0'
}

const TButton = {
  // baseClass: 'border block rounded inline-flex items-center justify-center',
  baseClass: 'rounded-lg border-none inline items-center justify-center text-xs border-gray-400 hover:bg-white hover:border-none focus:outline-none p-0 m-0 flex ',
  // primaryClass: 'text-white bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-600',
  primaryClass: 'text-white bg-purple-500 border-purple-500 hover:bg-purple-600 hover:border-purple-600 p-0'
}

const MyOwnTheme = {
  TInput,
  TButton
}

export default MyOwnTheme




