"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[88500],{76324:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d={key:"v-837eec10",path:"/devices/YRL-220L.html",title:"Yale YRL-220L control via MQTT",lang:"en-US",frontmatter:{title:"Yale YRL-220L control via MQTT",description:"Integrate your Yale YRL-220L via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-07-03T21:36:16.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Lock",slug:"lock",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Pin_code (composite)",slug:"pin-code-composite",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/YRL-220L.md",git:{updatedTime:1643385256e3}}},96968:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});var d=o(66252);const i=(0,d.uE)('<h1 id="yale-yrl-220l" tabindex="-1"><a class="header-anchor" href="#yale-yrl-220l" aria-hidden="true">#</a> Yale YRL-220L</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>YRL-220L</td></tr><tr><td>Vendor</td><td>Yale</td></tr><tr><td>Description</td><td>Real living keyless leveler lock</td></tr><tr><td>Exposes</td><td>lock (state, lock_state), battery, pin_code, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/YRL-220L.jpg" alt="Yale YRL-220L"></td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',3),a=(0,d.Uk)("How to use device type specific configuration"),c=(0,d.uE)('<ul><li><code>expose_pin</code>: Expose pin of this lock in the published payload (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock" aria-hidden="true">#</a> Lock</h3><p>The current state of this lock is in the published state under the <code>state</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;state&quot;: &quot;UNLOCK&quot;}</code>. To read the current state of this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>. This lock exposes a lock state which can be found in the published state under the <code>lock_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>not_fully_locked</code>, <code>locked</code>, <code>unlocked</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="pin-code-composite" tabindex="-1"><a class="header-anchor" href="#pin-code-composite" aria-hidden="true">#</a> Pin_code (composite)</h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pin_code&quot;: {&quot;user&quot;: VALUE, &quot;user_type&quot;: VALUE, &quot;user_enabled&quot;: VALUE, &quot;pin_code&quot;: VALUE}}</code></p><ul><li><code>user</code> (numeric): User ID to set or clear the pincode for.</li><li><code>user_type</code> (enum): Type of user, unrestrictied: owner (default), (year|week)_day_schedule: user has ability to open lock based on specific time period, master: user has ability to both program and operate the door lock, non_access: user is recognized by the lock but does not have the ability to open the lock. Allowed values: <code>unrestricted</code>, <code>year_day_schedule</code>, <code>week_day_schedule</code>, <code>master</code>, <code>non_access</code></li><li><code>user_enabled</code> (binary): Whether the user is enabled/disabled. Allowed values: <code>true</code> or <code>false</code></li><li><code>pin_code</code> (numeric): Pincode to set, set pincode to null to clear.</li></ul><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),l={},s=(0,o(83744).Z)(l,[["render",function(e,t){const o=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.iD)(d.HY,null,[i,(0,d._)("p",null,[(0,d._)("em",null,[(0,d.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.w5)((()=>[a])),_:1})])]),c],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,d]of t)e[o]=d;return e}}}]);