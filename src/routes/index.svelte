<script lang="ts">
	import { Question, Header } from '$lib';

	import circuit from '$lib/assets/circuit.svg?raw';
</script>

<div class="page">
	<Header year={2078} full_marks={75} pass_marks={27} grade={7} subject="बिज्ञान" />
	<div>दिएको निर्देशन अनुसार सिर्जनात्मक तथा मौलिक शैलीमा तलको प्रश्नको उत्तर लेख।</div>
	<div style:font-weight="bold" style:text-align="center">समुह 'क' भौतिक बिज्ञान</div>
	<ol>
		<Question text="" ol_styles="list-style-type: nepali-consonants;">
			<Question
				text="आयतन भनेको के हो ? नापमा SI एकाई प्रणालीको विकास गर्नुपर्नाका दुइवोटा कारण लेख।"
				marks={[1, 1]}
			/>
			<Question
				text="सरल यन्त्र भनेको के हो ? उत्तोलक कति प्रकारका हुन्छन ? ति के के हुन् उल्लेख गर।"
				marks={[1, 0.5, 1.5]}
			/>
		</Question>

		<Question text="" ol_styles="list-style-type: nepali-consonants;">
			<Question
				text="सेन्ट्रिपेटल बल को परिभाषा दिनुहोस। समान गति र असमान गतिमा फरक छुट्याउ।"
				marks={[1, 2]}
			/>
			<Question text="चाप भनेको के हो? चाप कुन दुई कुरामा निर्भर रहन्छ?" marks={[1, 1]} />
		</Question>

		<Question text="" ol_styles="list-style-type: nepali-consonants;">
			<Question
				text="ठोस माध्यममा ताप प्रसारण हुने विधिलाई के भनिन्छ ? थर्मोमिटरमा कुन पदार्थको प्रयोग गरिएको हुन्छ? अल्कोहलको उम्लने तापक्रम बिन्दु कति हो?"
				marks={[0.5, 1, 0.5]}
			/>
			<Question
				text="सामर्थ्य को परिभाषा लेख। निम्न बस्तुमा हुने शक्तिको प्रकार लेख।"
				marks={[1, 2]}
				ol_styles="columns: 2; display: block; list-style-type: nepali-vowels;"
			>
				<li>बजिरहेको रेडियो</li>
				<li>उचालिएको गोडा</li>
				<li>तन्किरहेको रवर</li>
				<li>गुडिरहेको भकुण्डो</li>
			</Question>
		</Question>

		<Question text="" ol_styles="list-style-type: nepali-consonants;">
			<Question
				text="प्रकाशको नियमित पराबर्तन भनेको के हो?प्रकाश परावर्तनका नियमहरु उल्लेख गर।"
				marks={[1, 2]}
			/>
			<Question
				text="ध्वनी कसरी पैदा हुन्छ ? तरल र ग्यासमा भन्दा ठोसमा ध्वनीको बेग  बढी हुन्छ। कसरी?"
				marks={[1, 1]}
			/>
		</Question>

		<Question text="" ol_styles="list-style-type: nepali-consonants;">
			<Question text="प्राकृतिक चुम्बक र कृत्रिम चुम्बक विच दुई फरक लेख।" marks={[2]} />
			<Question
				text="चित्रमा देखाइएको परिपथको अध्ययन गरी सोधिएको प्रश्नहरुको उत्तर लेख।"
				marks={[1, 1, 1]}
				ol_styles="list-style-type: nepali-vowels;"
			>
				<div style:display="grid" style:place-items="center">{@html circuit}</div>
				<Question text="चित्रमा सेलहरुलाई कुन प्रकारले जडान गरिएको छ?" />
				<Question
					text="यस्तो जडानमा सेलहरुको संख्या थपघट गर्दा बत्तिको उज्यालोपनमा कस्तो असर आउँँछ?"
				/>
				<Question text="यस प्रकारको सेलको जडानले हुने एक फाइदा लेख।" />
			</Question>
		</Question>

		<div style:font-weight="bold" style:text-align="center">
			<hr />
			समुह 'ख' रसायन बिज्ञान
		</div>
		<Question text="" ol_styles="list-style-type: nepali-consonants;">
			<Question
				text="पदार्थ भन्नाले के बुझिन्छ ? Li र Be कुन तत्वका संकेत हुन् लेख।"
				marks={[1, 1]}
			/>
			<Question text="अणु भनेको के हो? तत्व र योगीक विच फरक लेख।" marks={[1, 2]} />
		</Question>

		<Question text="" ol_styles="list-style-type: nepali-consonants;">
			<Question text="todo बिधि भनेको के हो? संछिप्त वर्णन गर।" marks={[1, 2]} />
			<Question
				text="घोलको परिभाषा लेख।  दैनिक जीवनमा घोललाई के के काममा प्रयोग गरिन्छ ? कुनै दुई उपयोगिता लेख।"
				marks={[1, 1]}
			/>
		</Question>

		<Question text="" ol_styles="list-style-type: nepali-consonants;">
			<Question text="अधातुलाई परिभाषित गर।  कुनै दुई अधातुको नाम लेख।" marks={[1, 1]} />
			<Question
				text="रासायनिक मलको आवस्यकता किन पर्दछ? डेटोल र  फेनोलको एक एक कार्य लेख।"
				marks={[1, 1, 1]}
			/>
		</Question>

		<div style:font-weight="bold" style:text-align="center">
			<hr />
			समुह 'ग' जिव बिज्ञान
		</div>
		<Question text="" ol_styles="list-style-type: nepali-consonants;">
			<Question
				text="गाईलाई समतापी जिव भन्नुको कारण लेख।  भ्यागुता र चमेरो कुन वर्गमा पर्ने जनावर हुन् लेख।"
				marks={[1, 1]}
			/>
			<Question
				text="डिभिजन एन्जियोस्पर्ममा पर्ने विरुवाको कुनै दुई लक्षण लेख। एन्जियोस्पर्म डिभिजनमा पर्ने चार विरुवा को नाम लेख।"
				marks={[1, 2]}
			/>
		</Question>
		<Question text="" ol_styles="list-style-type: nepali-consonants;">
			<Question
				text="परागसेचन भनेको के हो? विरुवाको काण्ड र पात ले गर्ने एक एक कार्य लेख।"
				marks={[1, 2]}
			/>
			<Question
				text="जनावरमा हुने स्वासप्रस्वास प्रक्रियामा भाग लिने अङ्गहरुको नाम लेख।"
				marks={[2]}
			/>
		</Question>
		<Question text="" ol_styles="list-style-type: nepali-consonants;">
			<Question
				text="कोष भनेको के हो ? अमिवा कोषमा हुने दुई प्रकारका भ्याकुल हरुको नाम लेख।"
				marks={[1, 1]}
			/>
			<Question
				text="वनस्पति कोषको सफा चित्र बनाई नामाकरण गर। वनस्पति कोषमा भ्याकुल र प्लास्टिड को काम उल्लेख गर।"
				marks={[2, 1]}
			/>
		</Question>

		<div style:font-weight="bold" style:text-align="center">
			<hr />
			समुह 'घ' भू तथा अन्तरिक्ष बिज्ञान
		</div>
		<Question text="" ol_styles="list-style-type: nepali-consonants;">
			<Question
				text="मौसम भनेको के हो? आग्नेय र पत्रे चट्टान का एक एक वटा उदाहरण देउ। "
				marks={[1, 1]}
			/>
			<Question
				text="चट्टानका कुने चारवटा उपयोगिता लेख।  मार्बल र पुमिस चट्टानहरुलाई वर्गीकरण गर। "
				marks={[2, 1]}
			/>
		</Question>

		<div style:font-weight="bold" style:text-align="center">
			<hr />
			समुह 'ङ' वातावरण बिज्ञान
		</div>
		<Question text="" ol_styles="list-style-type: nepali-consonants;">
			<Question text="जलस्रोतको महत्व र आवस्यकताहरु बुँदागत रुपमा उल्लेख गर। " marks={[1, 1]} />
			<Question text="विच्छेदक भनेको के हो ? कुनै दुई उपभोक्ताको उदाहरण देउ। " marks={[1, 2]} />
		</Question>

		<!-- <br /> -->
		<Question text="" ol_styles="list-style-type: nepali-consonants;">
			<Question
				text="बनविनाशले वातावारंमा पार्ने दुईवटा असरहरु लेखि बनविनाश रोकथामका उपाय उल्लेख गर। "
				marks={[1, 1]}
			/>
			<Question
				text="प्राकृतिक प्रकोप भनेको के हो? भुकम्प वाट बच्ने कुनै चार उपाय लेख। "
				marks={[1, 2]}
			/>
		</Question>

		<Question text="" ol_styles="list-style-type: nepali-consonants;">
			<Question
				text="दिगो विकास भनेको के हो ? नेपालमा दिगो विकासको लागि भइरहेका कुनै दुई प्रयास लेख। "
				marks={[1, 2]}
			/>
			<Question
				text="आफ्नो वरिपरिको वातावरण संरक्षण गर्न तिमीले गर्नसक्ने चारवटा कार्य लेख। "
				marks={[2]}
			/>
		</Question>
	</ol>
</div>

<style>
	ol {
		display: block;
		list-style-type: devanagari;
	}

	ol > :global(.w + .w) {
		margin-top: 1em;
	}

	hr {
		border: 0;
		border-top: 1px solid #ccc;
		margin: 1em 0;
	}
</style>
