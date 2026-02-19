export default function Home() {
    return (
        <div className="font-sans text-[#1e293b] bg-white selection:bg-[#ff6a3d] selection:text-white">
            {/* NAV */}
            <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50 transition-all">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">
                    <a href="#hero" className="text-2xl font-black tracking-tight text-[#1e293b]">
                        АВТО<span className="text-[#ff6a3d]">СЕРВИС</span>
                    </a>
                    <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-wide text-[#475569]">
                        <a href="#hero" className="hover:text-[#ff6a3d] transition-colors">Главная</a>
                        <a href="#services" className="hover:text-[#ff6a3d] transition-colors">Услуги</a>
                        <a href="#about" className="hover:text-[#ff6a3d] transition-colors">О нас</a>
                        <a href="#contact" className="hover:text-[#ff6a3d] transition-colors">Контакты</a>
                    </div>
                </div>
            </nav>

            {/* HERO */}
            <section
                id="hero"
                className="relative h-screen flex items-center bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.pexels.com')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 to-transparent"></div>
                <div className="container mx-auto relative z-10 px-6">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                            Мастерская <br />
                            <span className="text-[#ff6a3d]">высшего класса</span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed">
                            Сварка выхлопных систем, сложный ремонт кузова и высокоточная диагностика.
                        </p>
                        <div className="mt-10">
                            <a href="#contact" className="bg-[#ff6a3d] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#ff7a4d] hover:scale-105 transition-all shadow-lg shadow-[#ff6a3d]/30 inline-block">
                                Записаться на ремонт
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section id="services" className="py-32 bg-[#f8fafc]">
                <div className="container mx-auto px-6 text-center">
                    <span className="text-[#ff6a3d] font-bold uppercase tracking-[0.2em] text-sm">Профессионализм в деталях</span>
                    <h2 className="text-4xl md:text-5xl font-black mt-3 mb-16 text-[#0f172a]">Наши основные услуги</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {/* Карточка 1 */}
                        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 group">
                            <div className="w-12 h-1.5 bg-[#ff6a3d] mb-8 rounded-full"></div>
                            <h3 className="text-2xl font-bold mb-4 text-[#0f172a]">Сварка выхлопа</h3>
                            <p className="text-slate-500 leading-relaxed">Аргонная сварка и качественный ремонт глушителей любой сложности с гарантией на швы.</p>
                        </div>

                        {/* Карточка 2 */}
                        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 group">
                            <div className="w-12 h-1.5 bg-[#3b82f6] mb-8 rounded-full"></div>
                            <h3 className="text-2xl font-bold mb-4 text-[#0f172a]">Ремонт кузова</h3>
                            <p className="text-slate-500 leading-relaxed">Восстановление геометрии кузова после ДТП, устранение вмятин и дефектов любой сложности.</p>
                        </div>

                        {/* Карточка 3 */}
                        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 group">
                            <div className="w-12 h-1.5 bg-[#10b981] mb-8 rounded-full"></div>
                            <h3 className="text-2xl font-bold mb-4 text-[#0f172a]">Диагностика</h3>
                            <p className="text-slate-500 leading-relaxed">Компьютерное сканирование всех систем автомобиля на современном дилерском оборудовании.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="py-32 bg-[#0f172a] text-white">
                <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-black mb-6 italic">Оставьте заявку</h2>
                        <p className="text-slate-400 mb-8 text-lg">Заполните форму, и мы перезвоним вам в течение 15 минут для консультации.</p>
                        <div className="space-y-6 text-slate-300">
                            <div className="flex items-center gap-4">
                                <span className="text-2xl">📞</span>
                                <a href="tel:+79965820572" className="hover:text-[#ff6a3d] transition-colors font-bold text-xl">+7 996 582 0572</a>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-2xl">✈️</span>
                                <a href="https://t.me" target="_blank" rel="noreferrer" className="hover:text-[#ff6a3d] transition-colors font-bold text-xl">@diniPUFF</a>
                            </div>
                            <p>📍 г. Уфа, ул. Джалиля Киекбаева, 21 A</p>
                        </div>
                    </div>
                    <div className="md:w-1/2 bg-white rounded-3xl p-8 shadow-2xl">
                        <form action="https://formspree.io/f/mkovvgvp" method="POST" className="space-y-5">
                            <div>
                                <label className="block text-slate-700 text-sm font-bold mb-2 uppercase">ФИО</label>
                                <input type="text" name="name" placeholder="Иван Иванов" required className="w-full bg-slate-50 border-none p-4 rounded-xl text-slate-900 focus:ring-2 focus:ring-[#ff6a3d] outline-none transition-all" />
                            </div>
                            <div>
                                <label className="block text-slate-700 text-sm font-bold mb-2 uppercase">Телефон</label>
                                <input type="tel" name="phone" placeholder="+7 (999) 000-00-00" required className="w-full bg-slate-50 border-none p-4 rounded-xl text-slate-900 focus:ring-2 focus:ring-[#ff6a3d] outline-none transition-all" />
                            </div>
                            <div>
                                <label className="block text-slate-700 text-sm font-bold mb-2 uppercase">Сообщение</label>
                                <textarea name="message" rows={3} placeholder="Опишите проблему..." className="w-full bg-slate-50 border-none p-4 rounded-xl text-slate-900 focus:ring-2 focus:ring-[#ff6a3d] outline-none transition-all"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-[#ff6a3d] text-white p-5 rounded-xl font-black uppercase tracking-widest hover:bg-[#ff7a4d] shadow-lg shadow-[#ff6a3d]/20 transition-all active:scale-95">
                                Записаться
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-[#0f172a] border-t border-slate-800 py-12 text-center">
                <p className="text-slate-500 font-medium">© 2026 АВТОСЕРВИС. Сделано с качеством.</p>
            </footer>
        </div>
    );
}