"use client";
import useForm from "@/components/hooks/useForm";

const FormPage = () => {
    const { handleSubmit, handleChange, formData } = useForm();

    return (
        <div className="max-w-lg mx-auto my-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">Create account</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="mb-1 block text-sm font-medium text-slate-700">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                    />
                </div>

                <div>
                    <label htmlFor="confirmPassword" className="mb-1 block text-sm font-medium text-slate-700">Confirm Password</label>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-slate-900 py-2.5 font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormPage;