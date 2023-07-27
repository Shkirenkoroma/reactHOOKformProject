import { FC } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'

const App: FC = (): JSX.Element => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm()

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data))
    reset()
  }

  return (
    <div className="App">
      <h1>React hook form project</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First Name:
          <input
            {...register('firstName', {
              required: 'Поле обязательно к заполнению',
              minLength: {
                value: 5,
                message: 'Минимум 5 символов',
              },
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.firstName && (
            <p>{`${errors?.firstName?.message}` || 'Error!'}</p>
          )}
        </div>
        <label>
          Last Name:
          <input
            {...register('lastName', {
              required: 'Поле обязательно к заполнению',
              minLength: {
                value: 5,
                message: 'Минимум 5 символов',
              },
            })}
          />
        </label>
        <div style={{ height: 40 }}>
          {errors?.lastName && (
            <p>{`${errors?.lastName?.message}` || 'Error!'}</p>
          )}
        </div>
        <input className="submit" type="submit" disabled={!isValid} />
      </form>
    </div>
  )
}

export default App
