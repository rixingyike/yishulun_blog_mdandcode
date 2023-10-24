import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.cc2b3d55.js";
const __pageData = JSON.parse('{"title":"Flash Player的垃圾内存回收机制：能否强制回收？","description":"","frontmatter":{"sidebar":false,"date":"2008-05-01T00:00:00.000Z","tags":["AS3 Expert"]},"headers":[],"relativePath":"posts/2008/06.md","filePath":"posts/2008/06.md"}');
const _sfc_main = { name: "posts/2008/06.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="flash-player的垃圾内存回收机制-能否强制回收" tabindex="-1">Flash Player的垃圾内存回收机制：能否强制回收？ <a class="header-anchor" href="#flash-player的垃圾内存回收机制-能否强制回收" aria-label="Permalink to &quot;Flash Player的垃圾内存回收机制：能否强制回收？&quot;">​</a></h1><p>在Adobe Flash Player 10中，AS3的内部垃圾回收机制是怎样的？程序员可以强制FP回收内存吗？答案是否定的，但有方法。</p><h3 id="_1-毛主席请猫吃辣椒的故事" tabindex="-1">1. 毛主席请猫吃辣椒的故事 <a class="header-anchor" href="#_1-毛主席请猫吃辣椒的故事" aria-label="Permalink to &quot;1. 毛主席请猫吃辣椒的故事&quot;">​</a></h3><p>建国初期，国家正在对资本主义工商业进行社会主义改造，毛泽东问周恩来、刘少奇等，如何才能让猫吃辣椒？刘少奇说，把猫逮住，用筷子捅下去。周总理说，先把猫饿上三天，然后把辣椒裹在肉里给它吃。毛主席都不赞成这两种做法，毛主席说，把辣椒抹在猫屁股上，猫觉得辣自然就去会舔，而且还会因为这样做而兴奋不已。</p><h3 id="_2-强制垃圾内存回收的代码" tabindex="-1">2. 强制垃圾内存回收的代码 <a class="header-anchor" href="#_2-强制垃圾内存回收的代码" aria-label="Permalink to &quot;2. 强制垃圾内存回收的代码&quot;">​</a></h3><p>AS3程序员没有办法强制Flash Player进行垃圾回收，但有一种类似于毛主席请猫吃辣椒的方法可以使用。</p><p>MoonSpirit在天地会撰写过一篇关于强制垃圾回收的文章：[<a href="http://flash.9ria.com/viewthread.php?tid=234" target="_blank" rel="noreferrer">as hack技术]垃圾回收机强制执行</a>。文中例证，使用LocalConnection连接非法地址，并捕获导常，可以强制进行垃圾回收。<a href="https://yishulun.com/" target="_blank" rel="noreferrer">作者</a>在MoonSpirit的基础上，简单修改了一下代码，如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#F97583" })}">package</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">	</span><span style="${ssrRenderStyle({ "color": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}"> flash.display.Bitmap;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">	import flash.display.BitmapData;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">	import flash.display.Sprite;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">	import flash.net.LocalConnection;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">	</span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">/**</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}">	 * </span><span style="${ssrRenderStyle({ "color": "#F97583" })}">@author</span><span style="${ssrRenderStyle({ "color": "#6A737D" })}"> </span><span style="${ssrRenderStyle({ "color": "#B392F0" })}">LIYI https:</span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">//yishulun.com/</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}">	 * 修改自MoonSpirit的强制垃圾回收测试代码</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}">	 */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">	public class GarbageCollectionTest extends Sprite {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">		private const SQR_AMOUNT : int = 10000; </span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 方块数量        </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">		private var _container_sp : Sprite;</span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 容器sprite</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">		private var _sqrList: Array;</span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 所有方块的引用</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">		</span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 强制垃圾回收使用的对象</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">		private var conn1 :LocalConnection;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">		private var conn2 :LocalConnection;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">		public function GarbageCollectionTest() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">			init( );</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">		}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">		private function init( ) : void{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">			_container_sp = new Sprite( );</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">			addChild(_container_sp);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">			</span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">//initNoBitmapDataView( );// 峰值4111K，手动回收两次变为9K</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">			initBitmapDataView( );</span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 峰值14K，最小为14K，手动回收基本无变化</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">		}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">		</span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 初始化 通过通常手段 显示</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">		private function initNoBitmapDataView( ) : void {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">			layoutTenThousandSqr( );</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">			unLayoutTenThousandSqr( );</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">			_sqrList = null;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">			removeChild(_container_sp);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">			_container_sp = null;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">		}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">		</span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 初始化 通过BitmapData快照 显示</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">		private function initBitmapDataView( ) : void {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">			layoutTenThousandSqr( );</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">			unLayoutTenThousandSqr( );</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">			_sqrList = null;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">			removeChild(_container_sp);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">			_container_sp = null;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">			doClearance( );</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">		}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">		private function layoutTenThousandSqr( ) : void {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">			_sqrList = new Array( );</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">			for(var i : int = 0; i &lt; SQR_AMOUNT; i++){</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">				_sqrList.push(new Sprite());</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">				_sqrList[i].graphics.beginFill(0xff0000);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">				_sqrList[i].graphics.drawRect(0,0,100,100);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">				_sqrList[i].graphics.endFill();</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">				_container_sp.addChild(_sqrList[i]);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">			}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">		}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">		</span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 不显示</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">		private function unLayoutTenThousandSqr( ) : void {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">			for(var i : int = 0; i &lt; SQR_AMOUNT; i++){</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">				_container_sp.removeChild(_sqrList[i]);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">				delete _sqrList[i];</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">			}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">		}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">		</span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 精髓，垃圾回收机强制调用</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">		private function doClearance( ) : void {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">			trace(&quot;clear&quot;);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">			try{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">				conn1 = new LocalConnection();</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">				conn1.connect(&quot;liyi garbage collection 1&quot;);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">				conn2 = new LocalConnection();</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">				conn2.connect(&quot;liyi garbage collection 1&quot;);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">			}catch(e :</span><span style="${ssrRenderStyle({ "color": "#79B8FF" })}">*</span><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">){}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">			finally{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">				conn1 = null;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">				conn2 = null;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">			}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">		}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">	}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#E1E4E8" })}">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="${ssrRenderStyle({ "color": "#D73A49" })}">package</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">	</span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">import</span><span style="${ssrRenderStyle({ "color": "#24292E" })}"> flash.display.Bitmap;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">	import flash.display.BitmapData;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">	import flash.display.Sprite;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">	import flash.net.LocalConnection;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">	</span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">/**</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}">	 * </span><span style="${ssrRenderStyle({ "color": "#D73A49" })}">@author</span><span style="${ssrRenderStyle({ "color": "#6A737D" })}"> </span><span style="${ssrRenderStyle({ "color": "#6F42C1" })}">LIYI https:</span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">//yishulun.com/</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}">	 * 修改自MoonSpirit的强制垃圾回收测试代码</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#6A737D" })}">	 */</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">	public class GarbageCollectionTest extends Sprite {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">		private const SQR_AMOUNT : int = 10000; </span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 方块数量        </span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">		private var _container_sp : Sprite;</span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 容器sprite</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">		private var _sqrList: Array;</span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 所有方块的引用</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">		</span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 强制垃圾回收使用的对象</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">		private var conn1 :LocalConnection;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">		private var conn2 :LocalConnection;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">		public function GarbageCollectionTest() {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">			init( );</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">		}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">		private function init( ) : void{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">			_container_sp = new Sprite( );</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">			addChild(_container_sp);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">			</span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">//initNoBitmapDataView( );// 峰值4111K，手动回收两次变为9K</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">			initBitmapDataView( );</span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 峰值14K，最小为14K，手动回收基本无变化</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">		}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">		</span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 初始化 通过通常手段 显示</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">		private function initNoBitmapDataView( ) : void {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">			layoutTenThousandSqr( );</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">			unLayoutTenThousandSqr( );</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">			_sqrList = null;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">			removeChild(_container_sp);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">			_container_sp = null;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">		}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">		</span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 初始化 通过BitmapData快照 显示</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">		private function initBitmapDataView( ) : void {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">			layoutTenThousandSqr( );</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">			unLayoutTenThousandSqr( );</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">			_sqrList = null;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">			removeChild(_container_sp);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">			_container_sp = null;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">			doClearance( );</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">		}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">		private function layoutTenThousandSqr( ) : void {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">			_sqrList = new Array( );</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">			for(var i : int = 0; i &lt; SQR_AMOUNT; i++){</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">				_sqrList.push(new Sprite());</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">				_sqrList[i].graphics.beginFill(0xff0000);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">				_sqrList[i].graphics.drawRect(0,0,100,100);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">				_sqrList[i].graphics.endFill();</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">				_container_sp.addChild(_sqrList[i]);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">			}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">		}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">		</span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 不显示</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">		private function unLayoutTenThousandSqr( ) : void {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">			for(var i : int = 0; i &lt; SQR_AMOUNT; i++){</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">				_container_sp.removeChild(_sqrList[i]);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">				delete _sqrList[i];</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">			}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">		}</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">		</span><span style="${ssrRenderStyle({ "color": "#6A737D" })}">// 精髓，垃圾回收机强制调用</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">		private function doClearance( ) : void {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">			trace(&quot;clear&quot;);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">			try{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">				conn1 = new LocalConnection();</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">				conn1.connect(&quot;liyi garbage collection 1&quot;);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">				conn2 = new LocalConnection();</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">				conn2.connect(&quot;liyi garbage collection 1&quot;);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">			}catch(e :</span><span style="${ssrRenderStyle({ "color": "#005CC5" })}">*</span><span style="${ssrRenderStyle({ "color": "#24292E" })}">){}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">			finally{</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">				conn1 = null;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">				conn2 = null;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">			}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">		}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">	}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "color": "#24292E" })}">}</span></span></code></pre></div><p>然后呢，作者调用doClearance方法，这次无论是否手动回收，内存占用无变化，如下图所示，这说明doClearance方法已经强制了垃圾内存回收，它作用了！</p><p>[此处有图，但被岁月冲走了]</p><p>那么，为什么创建两次没用的LocalConnection可以强制回收内存呢？</p><h3 id="_3-as3垃圾内存回收机制" tabindex="-1">3. AS3垃圾内存回收机制 <a class="header-anchor" href="#_3-as3垃圾内存回收机制" aria-label="Permalink to &quot;3. AS3垃圾内存回收机制&quot;">​</a></h3><p>在Flash Player初始化运行时，会向操作系统申请一大块内存，如果程序很小，有可能根本用不了这么多内存，但FP在开始时不考虑这些，大多数情况下，第一次申请的内存总是不够用的。第一次申请的内存大小，与操作系统、浏览器环境有关。</p><p>当Flash Player发现已经申请的内存不够用时，它会再向操作系统申请一大块内存。但在申请之前，请注意，FP会尝试进行垃圾内存回收。那么它是如何回收的呢？</p><p>Flash Player在内部使用<strong>懒惰式引用计数回收方案</strong>进行垃圾内存回收，<strong>懒惰式</strong>指：FP并不会一次把所有可以回收的对象全部回收，它一次仅会回收一部分，如果内存不够用，它会向操作系统申请，如果系统无内存了，它会再次回收，如果全部回收了仍不够用，Game Over!<strong>引用计数</strong>指：FP在内部给每个对象标记一个记号，当没有任何对象引用此对象时，它即是可以被回收的；如果一个容器内有许多相互关联的对象，当把这个容器从显示列表中移除，并且置为null后，它也是可以被回收的。</p><p>在小节2中，<a href="https://yishulun.com/" target="_blank" rel="noreferrer">作者</a>问到为什么要手动单击两次“运行垃圾回收器”按钮，这是由于FP垃圾回收机制的<strong>懒惰</strong>性造成的。</p><p>在清楚了FP的内部垃圾回收机制之后，我们便可以回答，为什么创建两次没用的LocalConnection，并且连接并不存在的地址，故意抛出异常然后捕获，可以强制垃圾回收呢？因为，在AS3中LocalConnection是比较占用内存的对象，两次创建该类对象并尝试进行连接的内存开销大小足以请Flash Player重新向操作系统申请内存，而在申请之前，FP会尝试回收。原理即是这么简单，非独使用LocalConnection可以，其它较耗内存的对象也可以。</p><p>2008年5月</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("posts/2008/06.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _06 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _06 as default
};
