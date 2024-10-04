import { FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import '@/Styles/register.css'

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <GuestLayout>
                <Head title="Register" />
                <div className='registercontainer'>
                    {/* <div className="registerbanncomputer">
                        <img src="https://doctoriales.inphb.ci/images/bannerdoc.png" alt="" />
                    </div> */}
                    <div className="registermain">
                        <div className="mainleft">
                            <img src="https://doctoriales.inphb.ci/images/affiche.png" alt="" />
                        </div>
                        <form onSubmit={submit} className='mainright'>
                            <div className="mainrighttitle">
                                INSCRIPTION DOCTORIALES 2024
                            </div>
                            <div className='mainrightdiv'>
                                <InputLabel htmlFor="name" value="Nom et Prénoms" />

                                <TextInput
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required
                                />

                                <InputError message={errors.name} className="mt-2" />
                            </div>

                            <div className='mainrightdiv'>
                                <InputLabel htmlFor="email" value="Email" />

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div className='mainrightdiv'>
                                <InputLabel htmlFor="password" value="Mot de passe (MDP)" />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                />

                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div className='mainrightdiv'>
                                <InputLabel htmlFor="password_confirmation" value="Confirmez votre MDP" />

                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    required
                                />

                                <InputError message={errors.password_confirmation} className="mt-2" />
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <Link
                                    href={route('login')}
                                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Déjà un compte ? Se connecter
                                </Link>

                                <PrimaryButton className="ms-4" disabled={processing}>
                                    S'inscrire
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </GuestLayout>
        </>
    );
}
