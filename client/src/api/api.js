
export const getAll = (entityType) => fetch(`/${entityType}`)
.then(response => response.json()) ;

const makeReqBody = (url, method, bodyObj) => {
  const body = JSON.stringify(bodyObj);
  const headers = new Headers();
  headers.append('Content-Type', "application/json");
  return fetch(url, {method, body, headers}).then(response => response.json());
}

export const add = (entityType,telo) => {

makeReqBody(`/${entityType}`, 'post', telo )
};

export const remove = (entityType, id) =>
 fetch(`/${entityType}/${id}`, {method : 'delete'}).then(response => response.json());
