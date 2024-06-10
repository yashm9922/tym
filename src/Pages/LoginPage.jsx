import React from 'react'

const LoginPage = () => {

    const collegename = {
        background: "linear-gradient(to right, #ff7e5f, #feb47b, #86a8e7, #7f7fd5)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
    }


    return (
        <div className='min-h-screen py-12  bg-gray-300'>
            <div class=" flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your <span className='text-red-800'> '_tym._' </span> account
                    </h2>
                    <p class="mt-2 text-center text-sm text-gray-600 max-w">
                        Or <span> </span>
                        <a href="#" class="font-medium text-blue-600 hover:text-blue-500">
                            create an account
                        </a>
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center  ">
                <div className="w-full max-w-md p-6 rounded-xl shadow-md bg-gray-100">
                    <h1 class="text-3xl font-bold text-center mb-4" style={collegename}>JSPM RSCOE</h1>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                            <input type="email" id="email" placeholder="Enter your email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
                            <input type="password" id="password" placeholder="Enter your password" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" required />
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <label className="inline-flex items-center">
                                
                                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                                <span className="ml-2 text-gray-700">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-red-600 hover:underline">Forgot password?</a>
                        </div>
                        <button type="submit" className="w-full px-4 py-2 bg-zinc-700 text-white font-semibold rounded-full shadow-md hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-opacity-75 transition ease-in-out duration-300">Login</button>
                    </form>
                </div>
            </div>

        </div>
    )
}


export default LoginPage