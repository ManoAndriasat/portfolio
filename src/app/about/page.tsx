import React from "react";
import { Facebook, LinkedIn, GitHub, Launch } from "@mui/icons-material";

const About = () => {

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 h-screen">
                <div className="h-0 col-span-1 lg:col-span-2 lg:h-screen bg-transparent"></div>
                <div className="p-4 lg:col-span-4 lg:h-screen">
                    <div className="lg:pt-20 lg:pl-10 sm:pt-5 md:pt-5 relative h-full">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            <a href="/">Hi I&apos;m</a>
                            <br />
                            <a href="/"><span style={{ color: "rgba(239,99,81,255)" }}>Mano</span> Andriasat</a>
                        </h1>
                        <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
                            Designer / Front-end Developer
                        </h2>
                        <footer className="mt-20 lg:mt-0 lg:absolute bottom-1 left-0 flex items-center lg:pl-8 lg:p-4 lg:flex-col" aria-label="Réseaux sociaux de Mano Andriasat">
                            <ul className="flex lg:flex-col">
                                <li className="mr-4 lg:mr-0 lg:mb-4 flex items-center">
                                    <a href="https://www.facebook.com/mano.andriasat?locale=fr_FR"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Suivez-moi sur Facebook"
                                    title="Facebook">
                                        <Facebook className="mr-2" />
                                    </a>
                                </li>
                                <li className="mr-4 lg:mr-0 lg:mb-4 flex items-center">
                                    <a href="https://www.linkedin.com/in/manohisoa-andriasatarintsoa-5894a1304/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Suivez-moi sur LinkedIn"
                                    title="LinkedIn">
                                        <LinkedIn className="mr-2" />
                                    </a>
                                </li>
                                <li className="mr-4 lg:mr-0 lg:mb-4 flex items-center">
                                    <a href="https://github.com/ManoAndriasat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Suivez-moi sur GitHub"
                                    title="GitHub">
                                        <GitHub className="mr-2" />
                                    </a>
                                </li>
                            </ul>
                        </footer>
                    </div>
                </div>

                <div className="p-4 lg:col-span-6 lg:h-screen lg:overflow-y-auto bg-transparent">
                    <div className="w-full lg:w-8/12 lg:mt-20">
                        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only pb-5">A Propos</h2>
                        <p className="text-white" style={{ color: "#b6b6b7" }}>
                            Mon nom complet c'est <strong style={{ color: "white", fontWeight: "bold" }}>ANDRIASATARINTSOA Manohisoa, </strong>j&apos;ai <strong style={{ color: "white", fontWeight: "bold" }}>20 ans</strong> et je réside à <strong style={{ color: "white", fontWeight: "bold" }}>Antananarivo, Madagascar</strong>.
                            Depuis <strong style={{ color: "white", fontWeight: "bold" }}>2021</strong>, je poursuis mes études à <strong style={{ color: "white", fontWeight: "bold" }}>l&apos;IT University Andoharanofotsy</strong>,
                            où je me spécialise dans le <strong style={{ color: "white", fontWeight: "bold" }}>développement</strong>. Actuellement, je suis en <strong style={{ color: "white", fontWeight: "bold" }}>L3</strong> et je me consacre
                            à l&apos;apprentissage de technologies innovantes et à l&apos;amélioration de mes compétences en programmation.
                            Je suis passionné par le <strong style={{ color: "white", fontWeight: "bold" }}>développement d&apos;applications</strong>, <strong style={{ color: "white", fontWeight: "bold" }}>l&apos;analyse des données</strong>, ainsi que par le <strong style={{ color: "white", fontWeight: "bold" }}>design</strong> et l&apos;<strong style={{ color: "white", fontWeight: "bold" }}>UI/UX</strong>. Je suis toujours à la recherche
                            de nouvelles opportunités pour appliquer mes connaissances et contribuer à des projets significatifs. Je suis un étudiant motivé et prêt à relever de nouveaux défis.
                        </p>

                        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only pb-5 pt-5 mt:10">Experience</h2>

                        <div className="grid grid-cols-1 gap-2 lg:mt-20">
                            <div className="border p-2 grid grid-cols-12 gap-0 mb-5" style={{ boxShadow: "10px 5px 0 #6bff89" }}>
                                <div className="col-span-4 text-sm italic opacity-70" >
                                    jun - jul 2024
                                </div>
                                <div className="col-span-8">
                                    <h1 className="font-bold mb-1">Unité de Coordination des Projets  <span className="italic text-sm" style={{ color: "#9a53d1" }}>Front end</span></h1>
                                    <p className="text-white opacity-70">
                                        Devellopement d&apos;une application de gestion des réservations pour les salles de réunion,
                                        permettant de gérer les absences et de réserver des véhicules pour les missions, optimisant ainsi l&apos;organisation des ressources.
                                    </p>
                                </div>
                            </div>

                            <div className="border p-2 grid grid-cols-12 gap-0 mb-5" style={{ boxShadow: "10px 5px 0 #6bff89" }}>
                                <div className="col-span-4 text-sm italic opacity-70" >
                                    jun 2024 - aujourd&apos;hui
                                </div>
                                <div className="col-span-8">
                                    <h1 className="font-bold mb-1">Unité de Coordination des Projets <span className="italic text-sm" style={{ color: "#9a53d1" }}>Stage</span></h1>
                                    <p className="text-white opacity-70">
                                        Mon sujet stage consiste à créer un datamart et à développer un processus ETL pour extraire les données de DHIS2 vers ce datamart.
                                        Ensuite, j&apos;analyserai les données de santé à l&apos;aide d&apos;un tableau de bord dynamique.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only pb-5 pt-5 mt:10">Skills</h2>

                        <div className="grid grid-cols-1 gap-2 lg:mt-20">
                            <p className="text-white">Quelque technologie que j&apos;ai utiliser <span className="italic text-sm" style={{ color: "#9a53d1" }}>@recemment</span> </p>

                            <div className="flex flex-wrap gap-3">
                                <span style={{ border: "1px solid #b6b6b7", color: "#b6b6b7" }} className="text-sm rounded px-3 py-0.5">python</span>
                                <span style={{ border: "1px solid #b6b6b7", color: "#b6b6b7" }} className="text-sm rounded px-3 py-0.5">django</span>
                                <span style={{ border: "1px solid #b6b6b7", color: "#b6b6b7" }} className="text-sm rounded px-3 py-0.5">react</span>
                                <span style={{ border: "1px solid #b6b6b7", color: "#b6b6b7" }} className="text-sm rounded px-3 py-0.5">next.js</span>
                                <span style={{ border: "1px solid #b6b6b7", color: "#b6b6b7" }} className="text-sm rounded px-3 py-0.5">postgresql</span>
                                <span style={{ border: "1px solid #b6b6b7", color: "#b6b6b7" }} className="text-sm rounded px-3 py-0.5">bootstrap</span>
                                <span style={{ border: "1px solid #b6b6b7", color: "#b6b6b7" }} className="text-sm rounded px-3 py-0.5">tailwind</span>
                            </div>
                        </div>

                        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only pb-5 pt-5 mt:10">Projet recent</h2>

                        <div className="grid grid-cols-1 gap-2 lg:mt-20">
                            <div className="p-2 grid grid-cols-12 gap-0 mb-5">
                                <div className="col-span-4 text-sm italic opacity-70" >
                                    jun - jul 2024
                                </div>
                                <div className="col-span-8">
                                    <h1 className="font-bold mb-1">Calendrier dynamique des reservations de salles <span className="italic text-sm" style={{ color: "#9a53d1" }}>djangoRest - react</span></h1>
                                    <p className="text-white opacity-70">
                                        Devellopement d&apos;une application de gestion des réservations pour les salles de réunion,
                                        permettant de gérer les absences et de réserver des véhicules pour les missions, optimisant ainsi l&apos;organisation des ressources.
                                    </p>
                                </div>
                            </div>

                            <div className="p-2 grid grid-cols-12 gap-0 mb-5">
                                <div className="col-span-4 text-sm italic opacity-70" >
                                    mar - avr 2024
                                </div>
                                <div className="col-span-8">
                                    <h1 className="font-bold mb-1">Système commerciale <span className="italic text-sm" style={{ color: "#9a53d1" }}>asp.net - html - css</span></h1>
                                    <p className="text-white opacity-70">
                                        système conçu pour automatiser et optimiser le
                                        processus d&apos;achat au sein d&apos;une entreprise
                                        Projet de groupe de 3 personnes, j&apos;ai contribué à 40% du projet
                                    </p>
                                    <a href="https://github.com/ManoAndriasat/Systeme-Commerciale"
                                        className="flex items-center"
                                        style={{ color: "rgba(239,99,81,255)" }}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        voir sur github <GitHub fontSize="small" className="ml-1" />
                                    </a>
                                </div>
                            </div>

                            <div className="p-2 grid grid-cols-12 gap-0 mb-5">
                                <div className="col-span-4 text-sm italic opacity-70" >
                                    fev - mar 2024
                                </div>
                                <div className="col-span-8">
                                    <h1 className="font-bold mb-1">CRUD Generator <span className="italic text-sm" style={{ color: "#9a53d1" }}>java - vueJs</span></h1>
                                    <p className="text-white opacity-70">
                                        generateur de CRUD d&apos;un API: Spring Boot INTERFACE WEB: Vue js a partir d&apos;un base de donnees
                                    </p>
                                    <p className="text-white opacity-70">
                                        projet de groupe de 2 personnes, j&apos;ai contribue a 50% du projet
                                    </p>
                                    <a href="https://github.com/judi1968/Generate-crud-Pagination-and-Auth"
                                        className="flex items-center"
                                        style={{ color: "rgba(239,99,81,255)" }}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        voir sur github <GitHub fontSize="small" className="ml-1" />
                                    </a>
                                </div>
                            </div>

                            <div className="p-2 grid grid-cols-12 gap-0 mb-5">
                                <div className="col-span-4 text-sm italic opacity-70" >
                                    dec 2023 - fev 2024
                                </div>
                                <div className="col-span-8">
                                    <h1 className="font-bold mb-1">Site de vente de voiture d&apos;occasion <span className="italic text-sm" style={{ color: "#9a53d1" }}>react</span></h1>
                                    <p className="text-white opacity-70">
                                        C&apos;est un site web dédié à la vente de voitures d&apos;occasion, avec des filtres avancés pour faciliter la recherche et trouver facilement la voiture adaptée à vos besoins.
                                        Que vous cherchiez par marque, modèle, prix ou autres critères.
                                    </p>
                                    <p className="text-white opacity-70">
                                        Projet de groupe de 4 personnes, j&apos;ai contribué à 95% de la partie front-end.
                                    </p>
                                    <a href="https://varotravam.netlify.app/"
                                        className="flex items-center"
                                        style={{ color: "rgba(239,99,81,255)" }}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        voir le site web <Launch fontSize="small" className="ml-1" />
                                    </a>
                                </div>
                            </div>

                            <div className="p-2 grid grid-cols-12 gap-0 mb-5">
                                <div className="col-span-4 text-sm italic opacity-70" >
                                    jan - fev 2024
                                </div>
                                <div className="col-span-8">
                                    <h1 className="font-bold mb-1">Application android - gestion vente voiture <span className="italic text-sm" style={{ color: "#9a53d1" }}>ionic react</span></h1>
                                    <p className="text-white opacity-70">
                                        C&apos;est une application mobile qui permet de gérer les ventes de voitures d&apos;occasion le site web, enregistrer les informations des clients et des véhicules.
                                    </p>
                                    <p className="text-white opacity-70">
                                        Projet de groupe de 4 personnes, j&apos;ai contribué à 100% de l&apos;interface mobile ainsi que le deployement.
                                    </p>
                                    <a href="https://drive.google.com/file/d/1AlMbnATO4C2aezuQ2OzbaDKpsmK8SJGD/view?fbclid=IwY2xjawFjrThleHRuA2FlbQIxMAABHeJEhGilXkSdTxsX6agX3ZrVkxBlWxLfyd6ohzhCPjU1DKWGwTt_kLgNQQ_aem_jM1e_5ZXlAdO0W4WgI1K4w"
                                        className="flex items-center"
                                        style={{ color: "rgba(239,99,81,255)" }}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        telecharger <Launch fontSize="small" className="ml-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
