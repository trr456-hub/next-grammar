import NavBar from "../../components/NavBar";

export default function App({ Component, PageProps }) {
  return (
    <>
      <NavBar />
      <Component {...PageProps} />
      <style jsx global>
        {`
          a {
            color: white;
          }
        `}
      </style>
    </>
  );
}
