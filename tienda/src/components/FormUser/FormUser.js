
const FormUser = (submitHandler,form,setForm)=>{
    const changeHandler = (ev) => {
        const { name, value } = ev.target;
        setForm({ ...form, [name]: value });
    };
    
    return(
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="fullname">Nombre:</label>
                    <input type="text" id="fullname" name="fullname" value={form.fullname} onChange={changeHandler}/>
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email"  value={form.email} onChange={changeHandler}/>
                </div>

                <div>
                    <label htmlFor="phone">Mensaje:</label>
                    <input type="phone" id="phone" name="phone"  value={form.phone} onChange={changeHandler}/>
                </div>

                <button>Enviar</button>
            </form>
        </>
    )
}
export default FormUser;