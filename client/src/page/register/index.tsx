import type { FC } from "react"
import { Formik,Form } from "formik"
import Input from "../../components/form/input"
import { initialRegisterValues } from "../../utils/constants"
import { registerSchema } from "../../utils/schema"
import type {IRegisterValues} from "../../types"
import { Link } from "react-router-dom"


const Register: FC = () => {


  // form gönderilince hesap oluştur
const handleSubmit = (values: IRegisterValues) => {
  console.log(values);
};
  
  return (
    <div className="min-h-screen flex-1 flex flex-col justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img src="/logo.svg" alt="KICKS" className="mx-auto h-10 w-auto" />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight">
        Hesabınızı Oluşturun
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik 
        initialValues={initialRegisterValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit} >
          <Form className="space-y-8">
            <Input label="Adınız" name="firstName" type="text"/>
            <Input label="Soyadınız" name="lastName" type="text"/>
            <Input label="Email" name="email" type="email"/>
            <Input label="Şifre" name="password" type="text"/>
           

            <div>
              <button
               type="submit" className="disabled:opacity-50 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 cursor-pointer">Hesap Oluştur</button>
            </div>
          </Form>
        </Formik>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
       Hesabınız var mı? {" "} <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500" >
       Giriş Yap</Link>
        </p>
      </div>
    </div>
  )
}

export default Register