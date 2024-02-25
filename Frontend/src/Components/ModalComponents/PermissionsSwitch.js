import { useState } from "react";
import { Form } from 'react-bootstrap';
import { AxiosPUT } from "../../Scripts/AxiosRequest";
import Cookies from "js-cookie";

function PermissionsSwitch({ permissions, Name, fetchTargets }) {
  const togglePermissions = async () => {
    const response = await AxiosPUT('/updatePermissions/' + Name + "/" + !(permissions === "true"), {}, Cookies.get('token'))
    console.log(response)
    fetchTargets()
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