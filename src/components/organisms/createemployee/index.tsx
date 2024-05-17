import CreateForm from "#/components/molecules/createform";

const CreateEmployee = () => {

  return (
    <div className="py-1 ">
      <div className="w-full lg:w-8/12 px-4 mx-auto ">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg border-0 bg-green-50">
          <div className="rounded-t bg-white mb-0 px-6 py-6 ">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                Create Employee
              </h6>

            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0 ">
            <CreateForm
              keyId="create-employee"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateEmployee;
