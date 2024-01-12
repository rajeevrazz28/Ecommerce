
const FormSidebar = ({ title, tag }) => {
    return (
        <div className="loginSidebar bg-primary-mist px-9 py-10 hidden sm:flex flex-col gap-4 w-2/5">
            <button className="font-medium text-primary-black text-3xl">{title}</button>
            <button className="text-primary-black text-lg pr-2">{tag}</button>
        </div>
    )
}

export default FormSidebar;