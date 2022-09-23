export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "user",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "age", headerName: "Age", width: 100 },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "pragya02",
    img: "pics/products/mask1.jpg",
    email: "status1@test.com",
    status: "passive",
    age: 18,
  },
  {
    id: 2,
    username: "riya1",
    img: "pics/products/mask1.jpg",
    email: "status1@test.com",
    status: "pending",
    age: 24,
  },
  {
    id: 3,
    username: "shruty11",
    img: "pics/products/mask1.jpg",
    email: "status1@test.com",
    status: "active",
    age: 18,
  },
  {
    id: 4,
    username: "sup04",
    img: "pics/products/mask1.jpg",
    email: "status1@test.com",
    status: "active",
    age: 18,
  },
  {
    id: 5,
    username: "sab04",
    img: "pics/products/mask1.jpg",
    email: "status1@test.com",
    status: "active",
    age: 18,
  },
  {
    id: 6,
    username: "pratsi9",
    img: "pics/products/mask1.jpg",
    email: "status1@test.com",
    status: "pending",
    age: 18,
  },
  {
    id: 7,
    username: "pratsi9",
    img: "pics/products/mask1.jpg",
    email: "status1@test.com",
    status: "pending",
    age: 18,
  },
  {
    id: 8,
    username: "pratsi9",
    img: "pics/products/mask1.jpg",
    email: "status1@test.com",
    status: "pending",
    age: 18,
  },
  {
    id: 9,
    username: "pratsi9",
    img: "pics/products/mask1.jpg",
    email: "status1@test.com",
    status: "pending",
    age: 18,
  },
  {
    id: 10,
    username: "pratsi9",
    img: "pics/products/mask1.jpg",
    email: "status1@test.com",
    status: "pending",
    age: 18,
  },
];
