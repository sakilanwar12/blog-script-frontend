import CreateAPostForm from "./CreateAPostForm";

function PostCreatePage() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 lg:col-span-8">
        <CreateAPostForm />
      </div>
    </div>
  );
}

export default PostCreatePage;
