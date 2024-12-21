const UserForm = ({data, handleInfo}) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Digite o seu nome"
          required
          value={data.name}
          onChange={(e) => handleInfo("name", e.target.value)}
        />
      </div>

      <div className="form-control">
        <label htmlFor="name">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite o seu email"
          required
          value={data.email}
          onChange={(e)=> handleInfo("email",e.target.value)}
        />
      </div>
    </div>
  );
};

export default UserForm;
