"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[3679],{97681:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a={key:"v-2d38509b",path:"/devices/HS2IRC.html",title:"HEIMAN HS2IRC control via MQTT",lang:"en-US",frontmatter:{title:"HEIMAN HS2IRC control via MQTT",description:"Integrate your HEIMAN HS2IRC via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-09-30T20:52:56.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Configuring",slug:"configuring",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/HS2IRC.md",git:{updatedTime:1638303884e3}}},81461:(n,s,e)=>{e.r(s),e.d(s,{default:()=>o});const a=(0,e(66252).uE)('<h1 id="heiman-hs2irc" tabindex="-1"><a class="header-anchor" href="#heiman-hs2irc" aria-hidden="true">#</a> HEIMAN HS2IRC</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>HS2IRC</td></tr><tr><td>Vendor</td><td>HEIMAN</td></tr><tr><td>Description</td><td>Smart IR Control</td></tr><tr><td>Exposes</td><td>battery, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/HS2IRC.jpg" alt="HEIMAN HS2IRC"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>Device can learn up to 15 devices and up to 30 keycodes for each device.</p><h3 id="configuring" tabindex="-1"><a class="header-anchor" href="#configuring" aria-hidden="true">#</a> Configuring</h3><p>By publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> various device attributes can be configured:</p><h4 id="create-device" tabindex="-1"><a class="header-anchor" href="#create-device" aria-hidden="true">#</a> Create device</h4><p>Request:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;create&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;model_type&quot;</span><span class="token operator">:</span> <span class="token number">55</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><strong>model_type</strong>: User-defined model ID. Used just for reference. Can be <code>1..255</code>.</li></ul><p>Response:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;create&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;action_result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;action_model_type&quot;</span><span class="token operator">:</span> <span class="token number">55</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;action_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li><strong>action_result</strong>: (<code>success</code>/<code>error</code>). Action result.</li><li><strong>action_model_type</strong>: User-defined model ID. <code>1..255</code></li><li><strong>action_id</strong>: Internal device slot ID. Total IR transmitter can store up to 15 devices with ID <code>1..15</code></li></ul><p>NOTE: You should call <code>get_list</code> manually to refresh <code>devices</code> topic.</p><h4 id="learn-key" tabindex="-1"><a class="header-anchor" href="#learn-key" aria-hidden="true">#</a> Learn key</h4><p>Request:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;learn&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;key_code&quot;</span><span class="token operator">:</span> <span class="token number">31</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li><strong>id</strong>: Internal device slot ID. <code>1..15</code>.</li><li><strong>key_code</strong>: Keycode slot ID. <code>1..30</code> - Store/replace specific key in specified slot ID. <code>&gt;=31</code> - Create slot ID.</li></ul><p>NOTE: You should store keys one-by-one if you specified <code>key_code</code> by yourself.</p><p>Response:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;action&quot;</span><span class="token operator">:</span> <span class="token string">&quot;learn&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;action_result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;action_key_code&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;action_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li><strong>action_result</strong>: (<code>success</code>/<code>error</code>). Action result.</li><li><strong>action_key_code</strong>: Internal keycode slot ID, where key was stored. <code>1...30</code></li><li><strong>action_id</strong>: Internal device slot ID. <code>1..15</code></li></ul><p>NOTE: You should call <code>get_list</code> manually to refresh <code>devices</code> topic after learning key.</p><h4 id="send-stored-key" tabindex="-1"><a class="header-anchor" href="#send-stored-key" aria-hidden="true">#</a> Send stored key</h4><p>Request:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;send_key&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;key_code&quot;</span><span class="token operator">:</span> <span class="token number">1</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li><strong>id</strong>: Internal device slot ID. <code>1..15</code>.</li><li><strong>key_code</strong>: Keycode slot ID. <code>1..30</code>.</li></ul><h4 id="get-list-of-the-stored-devices-and-keys" tabindex="-1"><a class="header-anchor" href="#get-list-of-the-stored-devices-and-keys" aria-hidden="true">#</a> Get list of the stored devices and keys</h4><p>Request:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;get_list&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Response:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;devices&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;key_codes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token number">1</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;model_type&quot;</span><span class="token operator">:</span> <span class="token number">55</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="delete-device-or-keycode" tabindex="-1"><a class="header-anchor" href="#delete-device-or-keycode" aria-hidden="true">#</a> Delete device or keycode</h4><p>Request:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;delete&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>\n        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        <span class="token property">&quot;key_code&quot;</span><span class="token operator">:</span> <span class="token number">31</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li><strong>id</strong>: <code>1..15</code> - Delete specific device with ID. <code>&gt;=16</code> - Delete all devices.</li><li><strong>key_code</strong>: <code>1..30</code> -Delete specific keycode. <code>&gt;=31</code> - Delete all keycodes for specified device ID.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',41),t={},o=(0,e(83744).Z)(t,[["render",function(n,s){return a}]])},83744:(n,s)=>{s.Z=(n,s)=>{for(const[e,a]of s)n[e]=a;return n}}}]);