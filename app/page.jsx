import FormPage from "@/components/form";
import GoodData from "@/components/goodData";
import WebSocketPage from "@/components/websocket";
export default function Home() {
  return (
    <div>
      {/* <h1 className="text-center text-4xl font-semibold text-neutral-900 text-shadow-md mb-12">
        Hello this application is made for testing the code quality of mine and i have to make sure whenever i am using the useState and useEffect i have to go and make its custom hook to make the cod[...]
      </h1>
      <GoodData /> */}
      <FormPage />
      <WebSocketPage />
    </div>
  );
}
