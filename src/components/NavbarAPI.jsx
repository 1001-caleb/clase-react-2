const NavbarAPI = ({ page, setPage }) => {
  return (
    <>
      <div className="container d-flex justify-content-between">
        <p> page: {page}</p>
        <button onClick={() => setPage(page + 1)}>
          {" "}
          Next Page {page + 1}{" "}
        </button>
      </div>

      {page >= 2 ? (
        <button onClick={() => setPage(page - 1)}>Back page {page - 1}</button>
      ) : (
        ""
      )}
    </>
  );
};

export default NavbarAPI;
