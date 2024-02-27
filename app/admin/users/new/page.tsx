import AddUser from '@/app/components/user/AddUser';
import { create } from "@/db/dao/userDao";

const NewUser = () => {

  const saveUser = async(formData: any) => {
    "use server"; 
    let hasUserSaved = false;
    try {
      const newUser = await create(formData);
      console.log('User created:', newUser);
      hasUserSaved = true;
      
      // Optionally, you can redirect the user to another page or show a success message
    } catch (error) {
      console.error('Error creating user:', error);
      // Handle error, show error message, etc.
    }
    return hasUserSaved;
  }
  return (
    <AddUser saveUser={saveUser}></AddUser>
  )
}

export default NewUser