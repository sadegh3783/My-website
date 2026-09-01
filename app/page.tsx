'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial, OrbitControls } from '@react-three/drei';
import { ArrowDownRight, Code2, Layers3, MousePointer2, Sparkles } from 'lucide-react';
import { useRef, useState } from 'react';
import type { Group } from 'three';

function Artifact() {
  const group = useRef<Group>(null);
  useFrame(({ pointer }, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.13;
    group.current.rotation.x += (pointer.y * 0.12 - group.current.rotation.x) * 0.025;
    group.current.rotation.z += (-pointer.x * 0.1 - group.current.rotation.z) * 0.025;
  });
  return (
    <Float speed={1.5} rotationIntensity={0.35} floatIntensity={0.8}>
      <group ref={group}>
        <mesh rotation={[0.45, 0.35, 0]}>
          <torusKnotGeometry args={[1.15, 0.34, 180, 24, 2, 3]} />
          <MeshTransmissionMaterial backside samples={8} thickness={1.2} chromaticAberration={0.08} anisotropy={0.18} distortion={0.22} distortionScale={0.35} temporalDistortion={0.08} color="#9dffb0" roughness={0.08} />
        </mesh>
        <mesh scale={0.72}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial color="#11130f" metalness={0.82} roughness={0.18} />
        </mesh>
      </group>
    </Float>
  );
}

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5.2], fov: 42 }} dpr={[1, 1.6]}>
      <color attach="background" args={["#c8ff45"]} />
      <ambientLight intensity={1.6} />
      <directionalLight position={[4, 5, 4]} intensity={4} color="#ffffff" />
      <pointLight position={[-4, -3, 2]} intensity={18} color="#8467ff" />
      <Artifact />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.45} />
    </Canvas>
  );
}

const principles = [
  { icon: Layers3, label: 'Three.js canvas', detail: 'GPU-rendered depth' },
  { icon: MousePointer2, label: 'Responsive motion', detail: 'Pointer + touch ready' },
  { icon: Sparkles, label: 'Living material', detail: 'Glass, light, distortion' },
];

export default function Home() {
  const [exploring, setExploring] = useState(false);
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-paper selection:bg-lime selection:text-ink">
      <nav className="fixed inset-x-0 top-0 z-30 flex items-center justify-between border-b border-paper/15 px-5 py-4 backdrop-blur-md md:px-10">
        <a href="#top" className="font-mono text-xs font-bold uppercase tracking-[0.22em]">MY—WEBSITE</a>
        <div className="flex items-center gap-5 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/65">
          <a className="transition hover:text-lime" href="#about">About</a>
          <a className="hidden transition hover:text-lime sm:block" href="#stack">Stack</a>
          <a className="rounded-full border border-paper/25 px-4 py-2 text-paper transition hover:border-lime hover:text-lime" href="https://github.com/sadegh3783/my-website" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </nav>

      <section id="top" className="relative grid min-h-screen grid-cols-1 pt-20 lg:grid-cols-[1.05fr_.95fr]">
        <div className="relative z-10 flex flex-col justify-between px-5 pb-8 pt-12 md:px-10 md:pt-20 lg:pb-10">
          <p className="reveal font-mono text-[11px] uppercase tracking-[0.25em] text-lime">Independent digital studio · 2026</p>
          <div className="my-16 max-w-4xl lg:my-10">
            <h1 className="reveal-delay text-[clamp(4.4rem,11vw,10.5rem)] font-semibold leading-[.76] tracking-[-.075em]">Ideas<br /><span className="text-lime">with depth.</span></h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-paper/62 md:text-lg">An experimental corner of the web where code becomes space, motion becomes meaning, and every visit feels a little different.</p>
          </div>
          <div className="flex items-end justify-between gap-6">
            <button onClick={() => setExploring(!exploring)} className="group flex items-center gap-3 rounded-full bg-paper px-5 py-3 text-sm font-semibold text-ink transition hover:bg-lime">
              {exploring ? 'Keep exploring' : 'Enter the space'}<ArrowDownRight className="h-4 w-4 transition group-hover:rotate-45" />
            </button>
            <span className="hidden max-w-44 text-right font-mono text-[10px] uppercase leading-relaxed tracking-[.16em] text-paper/38 sm:block">Drag the object<br />to bend the view</span>
          </div>
        </div>
        <div className={`scene relative min-h-[52vh] overflow-hidden border-l border-paper/10 transition-all duration-700 lg:min-h-screen ${exploring ? 'scene-expanded' : ''}`}>
          <Scene />
          <div className="pointer-events-none absolute inset-x-5 bottom-5 flex items-center justify-between font-mono text-[9px] uppercase tracking-[.17em] text-ink/55"><span>Interactive artifact 001</span><span>WebGL / 60 FPS</span></div>
        </div>
      </section>

      <section id="about" className="grid border-t border-paper/15 lg:grid-cols-[.7fr_1.3fr]">
        <div className="border-b border-paper/15 p-6 lg:border-b-0 lg:border-r lg:p-10"><span className="font-mono text-[10px] uppercase tracking-[.22em] text-lime">01 / Manifesto</span></div>
        <div className="p-6 py-20 lg:p-16 lg:py-28"><p className="max-w-5xl text-[clamp(2.2rem,5vw,5.8rem)] font-medium leading-[.98] tracking-[-.055em]">The browser is not a page. It is a <span className="text-lime">place</span>—built from light, time, and interaction.</p></div>
      </section>

      <section id="stack" className="border-t border-paper/15 px-5 py-20 md:px-10">
        <div className="mb-12 flex items-end justify-between"><div><p className="font-mono text-[10px] uppercase tracking-[.22em] text-lime">02 / Built with</p><h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">The good parts.</h2></div><Code2 className="hidden h-8 w-8 text-paper/30 sm:block" /></div>
        <div className="grid border-l border-t border-paper/15 md:grid-cols-3">
          {principles.map(({ icon: Icon, label, detail }, index) => (
            <article key={label} className="group min-h-60 border-b border-r border-paper/15 p-6 transition hover:bg-lime hover:text-ink md:p-8">
              <div className="flex items-start justify-between"><Icon className="h-6 w-6" /><span className="font-mono text-[10px] opacity-40">0{index + 1}</span></div>
              <div className="mt-24"><h3 className="text-xl font-semibold">{label}</h3><p className="mt-1 text-sm opacity-55">{detail}</p></div>
            </article>
          ))}
        </div>
      </section>
      <footer className="flex flex-col gap-8 border-t border-paper/15 px-5 py-10 font-mono text-[10px] uppercase tracking-[.18em] text-paper/45 sm:flex-row sm:items-center sm:justify-between md:px-10"><span>Made for the curious.</span><span>React · R3F · Drei · Three.js</span><span>© 2026</span></footer>
    </main>
  );
}
