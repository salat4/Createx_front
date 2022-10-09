import { Header } from "components/header";

export default function PageNotFound({ title }) {
  return (
    <>
      <Header />
      <div className="not-found-container">
        <p>{title}</p>
        <p>Please select a page from the navigation menu.</p>
      </div>
    </>
  );
}
