import UserForm from "./UserForm";
import UserInfo from "./UserInfo";

function App() {
  return (
    <div className="p-4">
      <h1 className='text-3xl mb-4'>Firebase Image upload</h1>

      <div className="space-y-6">
        <UserForm />
        <UserInfo />
      </div>
    </div>
  )
}
export default App;


