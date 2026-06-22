import {
  Button,
  Input,
  Modal,
  Toast,
  Loader,
} from "../../components/ui/index";

export default function Demo() {
  return (
    <main className="max-w-4xl mx-auto p-8 space-y-8">

      <h1 className="text-4xl font-bold">
        UI Components Demo
      </h1>

      <div className="space-y-4">

        <h2 className="text-2xl font-bold">
          Button Component
        </h2>
        <Button text="Submit" />

        <h2 className="text-2xl font-bold">
          Input Component
        </h2>
        <Input placeholder="Enter your email" />

        <h2 className="text-2xl font-bold">
          Modal Component
        </h2>
        <Modal title="Welcome!" />

        <h2 className="text-2xl font-bold">
          Toast Component
        </h2>
        <Toast message="Saved Successfully!" />

        <h2 className="text-2xl font-bold">
          Loader Component
        </h2>
        <Loader />

      </div>

    </main>
  );
}