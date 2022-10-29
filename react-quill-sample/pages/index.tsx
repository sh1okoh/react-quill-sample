import MyComponent from '../components/QuillEditor'

export default function Home() {
  return (
    <>
      { typeof window === 'object' ? <MyComponent /> : null}
      hogehoge
    </>
  )
}
