const Form = ({addArmor}) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(!name || !image || !description || !category){
            alert('Todos os campos são obrigatórios');
            return;
        }
    }
    return(
        <div>
            <form onSubmit={handleFormSubmit}>
            <label>Nome</label>
            <input type="text" value={name} placeholder="Digite um nome para a Armadura" onChange={(e) => setName(e.target.value)} />
            <label>Imagem</label>
            <input type="text" value={image} placeholder="coloque uma imagem" onChange={(e) => setImage(e.target.value)} />
            <label>Descrição</label>
            <input type="text" value={description} placeholder="Adicione uma Descrição" onChange={(e) => setDescription(e.target.value)}/>
            <label>Categoria</label>
            <input type="text" value={category} placeholder="Defina a Categoria" onChange={(e) => setCategory(e.target.value)}/>
            <button type="submit"></button>
            </form>
        </div >
    )
}