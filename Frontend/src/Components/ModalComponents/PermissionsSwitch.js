import { Form } from 'react-bootstrap';
import axios from "axios";
import { toast } from "react-toastify";

function PermissionsSwitch({ permissions, Name, fetchTargets }) {
  const togglePermissions = async () => {
    try {
      const response = await axios.put('/updatePermissions/' + Name + "/" + !(permissions === "true"), {}, { withCredentials: true });
      console.log(response)
      fetchTargets()
    }
    catch (error) {
      toast.error(`Error updating permissions : ${error}`);
    }

  };

  return (
    <Form>
      <Form.Check
        type="switch"
        id="custom-switch"
        label="Permission"
        checked={permissions === "true"}
        onChange={togglePermissions}
      />
    </Form>
  );
}

export default PermissionsSwitch;