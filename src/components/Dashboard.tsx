import React from 'react'

const Dashboard: React.FC = () => {
  return (
    <div className='p-6 space-y-6'>
      <h1 className='text-3xl font-bold'>Главная панель</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-1 rounded-lg shadow-sm border flex justify-center items-center max-w-50">
          <h3 className='text-lg font-semibold inline-block'>Всего проектов: <span className=''></span></h3>
          <p className='ml-2 text-2xl fond-bold text-blue-400 inline-block'>3</p>
        </div>
        <div className="">
          <h3>Активные дефекты</h3>
          <p>10</p>
        </div>
        <div className="">
          <h3>Критические</h3>
          <p>3</p>
        </div>
        <div className="">
          <h3>Исправлено за неделю</h3>
          <p>5</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
