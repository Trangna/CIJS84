import LoadProductTable from "./LoadProductTable";

const Lesson11 = () => {
  const { list, loading } = LoadProductTable();
  return loading ? (
    <div class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  ) : (
    <div>
      <table class="table">
        <thead>
          <tr className="text-center">
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Comment</th>
          </tr>
        </thead>
        <tbody>
          {list?.map((item, index) => {
            return (
              <tr className="text-center" key={item.Id}>
                <th scope="row">{index + 1}</th>
                <td>{item.data?.name}</td>
                <td>{item.data?.email}</td>
                <td>{item.data?.body}</td>
                <td className="text-center">
                  <div className="">
                    <button
                      class="btn btn-outline-primary"
                      type="button"
                      style={{ marginRight: 5 }}
                    >
                      View
                      <i class="fa-solid fa-eye"></i>
                    </button>
                    <button class="btn btn-outline-danger" type="button">
                      Delete
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );

  // <div>
  //   <table class="table">
  //     <thead>
  //       <tr className="text-center">
  //         <th scope="col">#</th>
  //         <th scope="col">Username</th>
  //         <th scope="col">Email</th>
  //         <th scope="col">Comment</th>
  //         {/* <th scope="col">Description</th>
  //         <th scope="col">Price</th> */}
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {list?.map((item, index) => {
  //         return (
  //           <tr className="text-center" key={item.Id}>
  //             <th scope="row">{index + 1}</th>
  //             <td>{item.name}</td>
  //             <td>{item.email}</td>
  //             {/* <td>{item.data?.["capacity GB"]}</td>
  //             <td>{item.data?.description}</td> */}
  //             <td>{item.body}</td>
  //             <td className="text-center">
  //               <div className="">
  //                 <button
  //                   class="btn btn-outline-primary"
  //                   type="button"
  //                   style={{ marginRight: 5 }}
  //                 >
  //                   View
  //                   <i class="fa-solid fa-eye"></i>
  //                 </button>
  //                 <button class="btn btn-outline-danger" type="button">
  //                   Delete
  //                   <i class="fa-solid fa-trash"></i>
  //                 </button>
  //               </div>
  //             </td>
  //           </tr>
  //         );
  //       })}
  //     </tbody>
  //   </table>
  // </div>
};

export default Lesson11;
