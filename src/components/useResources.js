import { useState, useEffect } from "react";
import axios from "axios";

//Functional component with Hooks to be reusable (ie: ResourceList, UserList components)

const useResources = resource => {
  const [resources, setResources] = useState([]);

  const fetchResource = async resource => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(response.data);
  };

  // gets called on component mount (rendered first time)
  // and every time component it's updated (rerendered)
  // useEffect = componentDidMount + componentDidUpdate
  useEffect(() => {
    fetchResource(resource);
  }, [resource]);
  // useEffect its going to execute callback function 'fetchResource'
  // ONLY when 'resource' arguiment has changed from previous value

  return resources;
};

export default useResources;
