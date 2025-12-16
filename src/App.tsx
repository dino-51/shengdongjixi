import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { works } from './data';
import { Work, ViewState } from './types';
import AudioPlayer from './components/AudioPlayer';

function App() {
  const [view, setView] = useState<ViewState>('home');
  const [currentWork, setCurrentWork] = useState<Work | null>(null);

  const handleNavigate = (newView: ViewState) => {
    setView(newView);
    if (newView === 'home' || newView === 'list-work' || newView === 'list-installation') {
      setCurrentWork(null);
    }
  };

  const handleWorkClick = (work: Work) => {
    setCurrentWork(work);
    setView('detail');
  };

  const filteredWorks = view === 'list-work' 
    ? works.filter(w => w.category === 'work')
    : view === 'list-installation' 
      ? works.filter(w => w.category === 'installation')
      : [];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500 selection:text-black overflow-hidden relative">
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-black to-black" />

      <AnimatePresence mode="wait">
        {view === 'home' && (
          <HomeView key="home" onNavigate={handleNavigate} />
        )}
        
        {(view === 'list-work' || view === 'list-installation') && (
          <ListView 
            key="list" 
            items={filteredWorks} 
            title={view === 'list-work' ? '曲目单' : '装置单'}
            onBack={() => handleNavigate('home')}
            onSelect={handleWorkClick}
          />
        )}

        {view === 'detail' && currentWork && (
          <DetailView 
            key="detail" 
            work={currentWork} 
            onBack={() => handleNavigate(currentWork.category === 'work' ? 'list-work' : 'list-installation')} 
          />
        )}

        {view === 'team' && (
          <TeamView key="team" onBack={() => handleNavigate('home')} />
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Sub Components ---

const HomeView: React.FC<{ onNavigate: (v: ViewState) => void }> = ({ onNavigate }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="relative h-screen flex flex-col justify-center items-center p-8"
    >
      {/* Header Info */}
      <div className="absolute top-8 left-8 text-sm md:text-base text-gray-400 font-light tracking-widest">
        上海音乐学院
      </div>
      <div className="absolute top-8 right-8 text-sm md:text-base text-right text-gray-400 font-light">
        <span className="block text-cyan-500 font-normal">声东击西III</span>
        <span className="text-xs opacity-70">工作坊成果汇报音乐会</span>
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center gap-12 z-10 w-full max-w-4xl">
        <div className="text-center space-y-4">
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600"
          >
            声东击西
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm md:text-lg text-gray-400 font-light tracking-wide max-w-xl mx-auto"
          >
            上海音乐学院音乐工程系音乐科技新生代原创作品音乐会
          </motion.p>
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row gap-6 md:gap-12 w-full justify-center"
        >
          <NavButton onClick={() => onNavigate('list-work')}>节目单</NavButton>
          <NavButton onClick={() => onNavigate('list-installation')}>装置介绍</NavButton>
        </motion.div>
      </main>

      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-8 text-xs text-gray-600 hover:text-cyan-500 transition-colors cursor-pointer"
        onClick={() => onNavigate('team')}
      >
        制作团队：上海音乐学院声名远扬团队
      </motion.footer>
    </motion.div>
  );
};

const ListView: React.FC<{ items: Work[], title: string, onBack: () => void, onSelect: (w: Work) => void }> = ({ items, title, onBack, onSelect }) => {
  return (
    <motion.div 
      initial={{ x: '100%' }} 
      animate={{ x: 0 }} 
      exit={{ x: '100%' }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="absolute inset-0 bg-black z-20 flex flex-col"
    >
      {/* Header */}
      <div className="p-8 flex items-center justify-between border-b border-gray-800 bg-black/50 backdrop-blur-md sticky top-0 z-30">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
          <span className="text-sm font-light tracking-wider">返回</span>
        </button>
        <h2 className="text-2xl font-bold tracking-wider text-white">{title}</h2>
        <div className="w-16"></div> {/* Spacer for alignment */}
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto p-4 md:p-12 pb-24">
        <div className="max-w-4xl mx-auto space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => onSelect(item)}
              className="group flex items-baseline gap-6 p-6 border border-gray-800 hover:border-cyan-500/50 hover:bg-gray-900/40 rounded-lg cursor-pointer transition-all duration-300"
            >
              <span className="text-2xl font-mono text-gray-600 group-hover:text-cyan-500 transition-colors">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-gray-200 group-hover:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-300 font-light">
                  {item.artist}
                </p>
              </div>
              <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500 text-sm tracking-widest uppercase">
                详情
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// --- Modified DetailView Component (Gallery moved to Right Column) ---
const DetailView: React.FC<{ work: Work, onBack: () => void }> = ({ work, onBack }) => {
  const bgImage = work.hasImage ? `/assets/${work.folderName}/cover.jpg` : null;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.4 }}
      className="absolute inset-0 bg-black z-30 overflow-hidden flex flex-col"
    >
      {/* Background with Overlay */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-105"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />
        </div>
      )}

      {/* Nav */}
      <div className="relative z-10 p-8">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors bg-black/30 px-4 py-2 rounded-full backdrop-blur-md border border-white/10"
        >
          <span className="text-lg group-hover:-translate-x-1 transition-transform">←</span>
          <span>返回</span>
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 overflow-y-auto px-6 pb-20 md:px-20">
        <div className="max-w-5xl mx-auto flex flex-col gap-12 pt-4">
          
          {/* Header Section */}
          <div className="space-y-4 border-l-4 border-cyan-500 pl-6">
            <motion.h1 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="text-4xl md:text-6xl font-bold text-white tracking-tight"
            >
              {work.title}
            </motion.h1>
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-cyan-400 font-light"
            >
              {work.artist}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info Column (Left) */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3 border-b border-gray-700 pb-2">简介</h3>
                <p className="text-gray-300 leading-relaxed font-light text-justify whitespace-pre-line">
                  {work.description}
                </p>
              </div>

              {work.performers && work.performers.length > 0 && (
                <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-3 border-b border-gray-700 pb-2">表演者</h3>
                  <ul className="space-y-2">
                    {work.performers.map((p, i) => (
                      <li key={i} className="text-gray-300 font-light text-sm flex items-start gap-2">
                        <span className="text-cyan-500/70">•</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {work.extraNote && (
                <div className="text-xs text-gray-500 italic p-4 border border-gray-800 rounded-lg">
                  {work.extraNote}
                </div>
              )}
            </motion.div>

            {/* Media Column (Right) - Video, Audio, AND Images go here now */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {work.hasVideo && (
                <div className="space-y-2">
                  <h3 className="text-sm uppercase tracking-widest text-gray-500 pl-1">视频演示</h3>
                  <div className="aspect-video w-full bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-800 relative group">
                    <video 
                      controls 
                      className="w-full h-full object-cover"
                      poster={`/assets/${work.folderName}/cover.jpg`}
                      src={`/assets/${work.folderName}/video.mp4`}
                    >
                      您的浏览器不支持视频播放。
                    </video>
                  </div>
                </div>
              )}

              {work.hasAudio && (
                <div className="space-y-2">
                  <h3 className="text-sm uppercase tracking-widest text-gray-500 pl-1">音频赏析</h3>
                  <AudioPlayer src={`/assets/${work.folderName}/audio.mp3`} />
                </div>
              )}

              {/* Standard Cover Image (Only shows if NO video) */}
              {work.hasImage && !work.hasVideo && (
                <div className="rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
                   <img 
                    src={`/assets/${work.folderName}/cover.jpg`} 
                    alt={work.title} 
                    className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity"
                    onError={(e) => e.currentTarget.style.display = 'none'} 
                  />
                </div>
              )}

              {/* 🔥 Gallery Images (Moved Here!) 🔥 */}
              {work.gallery && work.gallery.length > 0 && (
                <div className="space-y-4">
                  {/* 如果你只想让它们紧挨着简介，不需要显示"更多图片"这个小标题，可以把下面这行删掉 */}
                  {/* <h3 className="text-sm uppercase tracking-widest text-gray-500">更多图片</h3> */}
                  
                  <div className="grid grid-cols-1 gap-6">
                    {work.gallery.map((imgUrl, index) => (
                      <div 
                        key={index} 
                        className="rounded-xl overflow-hidden border border-white/10 shadow-lg"
                      >
                        <img 
                          src={imgUrl} 
                          alt={`${work.title} 图片 ${index + 1}`}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
            </motion.div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

const TeamView: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 50 }}
      className="absolute inset-0 bg-black z-40 flex flex-col items-center justify-center p-8 text-center"
    >
      <h2 className="text-3xl font-bold mb-8 text-white">团队介绍丨声名远扬</h2>
      <div className="space-y-2 text-gray-400 font-light">
        <p>“声名远扬”是一支由上海音乐学院在校学生组成的跨学科创新团队，成员分别来自音乐工程系、艺术管理系与数字媒体与艺术专业，具备扎实的音乐技术背景、艺术策划能力与数字创作视野。团队项目已成功通过上海音乐学院大学生创新创业孵化基地第六批遴选</p>
        <p>团队成员包括：龚爱莉、汤小雨、陈米纳、刘泽南、卞政、李响霏、吴晓涵。</p>
        <p>“声名远扬”致力于探索当代表演艺术中声音的延展性与情感承载力。我们以“演出不止于舞台当下”为核心理念，围绕声音这一最具记忆与情绪唤起能力的媒介，尝试通过技术、媒介与叙事设计，将观演过程中的情感体验延伸至演出前后与不同场景之中。</p>
      </div>
      <button 
        onClick={onBack}
        className="mt-12 px-8 py-3 rounded-full border border-gray-700 text-gray-300 hover:bg-white hover:text-black transition-all"
      >
        返回首页
      </button>
    </motion.div>
  );
};

// UI Components

const NavButton: React.FC<{ onClick: () => void, children: React.ReactNode }> = ({ onClick, children }) => (
  <button 
    onClick={onClick}
    className="
      w-64 py-6 
      border border-gray-600 
      bg-transparent hover:bg-white/5 hover:border-cyan-500 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]
      text-xl tracking-[0.2em] font-light text-white 
      transition-all duration-300 ease-out
      backdrop-blur-sm rounded-sm
    "
  >
    {children}
  </button>
);

export default App;