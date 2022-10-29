import dynamic from "next/dynamic";

const MyComponent = dynamic(import("../components/QuillEditor/index"), { ssr: false });

export default function Home() {
  return (
    <>
      <main>
        <MyComponent />
      </main>
      hogehoge
    </>
  )
}
