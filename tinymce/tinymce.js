(function() {
	tinymce.PluginManager.add('rtsc_mce_button', function(editor, url) {
		editor.addButton('rtsc_mce_button', {
			title: 'Ruven Shortcodes',
			type: 'menubutton',
			icon: 'icon rtsc-icon',
			menu: [


				/* Button
				------------------------------------------------------------ */
				{
					text: 'Button',
					onclick: function() {
						editor.windowManager.open( {
							title: 'Insert Button Shortcode',
							body: [
								{
									type:  'textbox',
									name:  'title',
									label: 'Title',
									value: 'My Button'
								},
								{
									type:  'textbox',
									name:  'url',
									label: 'URL',
									value: ''
								},
								{
									type: 'listbox',
									name: 'open_new_tab',
									label: 'Open Link in New Tab',
									'values': [
										{ text: 'On',  value: 'on'  },
										{ text: 'Off', value: 'off' }
									]
								},
								{
									type:  'listbox',
									name:  'style',
									label: 'Style',
									'values': [
										{ text: 'Black',  		value: 'black'  		},
										{ text: 'Grey', 			value: 'grey'  			},
										{ text: 'Purple', 	  value: 'purple'  		},
										{ text: 'Red',  			value: 'red'  			},
										{ text: 'Orange', 	  value: 'orange'  		},
										{ text: 'Yellow',   	value: 'yellow'  		},
										{ text: 'Green', 		  value: 'green'  		},
										{ text: 'Blue',  			value: 'blue'  			},
										{ text: 'Light Blue', value: 'light-blue' }
									]
								},
								{
									type:  'listbox',
									name:  'size',
									label: 'Size',
									'values': [
										{ text: 'Small',  value: 'small'  },
										{ text: 'Medium', value: 'medium' },
										{ text: 'Large',  value: 'large'  }
									]
								}
							],
							onsubmit: function( e ) {
								editor.insertContent(
									'[ruven_button ' +
									'url="' 				 + e.data.url 				 + '" ' +
									'open_new_tab="' + e.data.open_new_tab + '" ' +
									'style="' 			 + e.data.style 			 + '" ' +
									'size="' 				 + e.data.size 				 + '"] ' +
										e.data.title +
									' [/ruven_button]'
								);
							}
						});
					}
				}, // END Button


				/* Columns
				------------------------------------------------------------ */
				{
					text: 'Columns',
					onclick: function() {
						editor.windowManager.open( {
							title: 'Insert Columns Shortcode',
							body: [
								{
									type:  'listbox',
									name:  'column',
									label: 'Column Type',
									'values': [
										{ text: 'One Half',  	  value: 'ruven_one_half'     },
										{ text: 'One Third', 	  value: 'ruven_one_third'    },
										{ text: 'Two Thirds',   value: 'ruven_two_third'    },
										{ text: 'One Fourth',   value: 'ruven_one_fourth'   },
										{ text: 'Three Fourth', value: 'ruven_three_fourth' },
										{ text: 'One Fifth', 	  value: 'ruven_one_fifth'    },
										{ text: 'Two Fifth', 	  value: 'ruven_two_fifth'    },
										{ text: 'Three Fifth',  value: 'ruven_three_fifth'  },
										{ text: 'Four Fifth', 	value: 'ruven_four_fifth'   },
										{ text: 'One Sixth',		value: 'ruven_one_sixth'    },
										{ text: 'Two Sixth', 	  value: 'ruven_two_sixth'    },
										{ text: 'Three Sixth',  value: 'ruven_three_sixth'  },
										{ text: 'Four Sixth', 	value: 'ruven_four_sixth'   },
										{ text: 'Five Sixth', 	value: 'ruven_five_sixth'   }
									]
								},
								{
									type:  'listbox',
									name:  'last',
									label: 'Last Column?',
									'values': [
										{ text: 'No',  value: ''      },
										{ text: 'Yes', value: ' last' }
									]
								},
								{
									type:  'textbox',
									name:  'content',
									label: 'Column Content',
									value: '',
									multiline: true,
									minWidth:  300,
									minHeight: 150
								}
							],
							onsubmit: function( e ) {
								editor.insertContent(
									'[' + e.data.column + e.data.last + '] ' + e.data.content + ' [/' + e.data.column + ']'
								);
							}
						});
					}
				}, // END Columns


				/* Horizontal Ruler
				------------------------------------------------------------ */
				{
					text: 'Horizontal Ruler',
					onclick: function() {
						editor.windowManager.open( {
							title: 'Insert Horizontal Ruler Shortcode',
							body: [
								{
									type:  'listbox',
									name:  'style',
									label: 'Style',
									'values': [
										{ text: 'Default',  	 value: 'default' },
										{ text: 'Alternative', value: 'alt'		  }
									]
								},
								{
									type:  'listbox',
									name:  'size',
									label: 'Size',
									'values': [
										{ text: 'Small',  value: 'small'  },
										{ text: 'Medium', value: 'medium' },
										{ text: 'Large',  value: 'large'  }
									]
								}
							],
							onsubmit: function( e ) {
								editor.insertContent(
									'[ruven_hr style="' + e.data.style + '" size="' + e.data.size  + '"]'
								);
							}
						});
					}
				}, // END Horizontal Ruler


				/* Info Box
				------------------------------------------------------------ */
				{
					text: 'Info Box',
					onclick: function() {
						editor.windowManager.open( {
							title: 'Insert Info Box Shortcode',
							body: [
								{
									type:  'textbox',
									name:  'content',
									label: 'Text',
									value: '',
									multiline: true,
									minWidth:  300,
									minHeight: 50
								},
								{
									type:  'listbox',
									name:  'style',
									label: 'Style',
									'values': [
										{ text: 'Default', value: 'default' },
										{ text: 'Grey',  	 value: 'grey' 		},
										{ text: 'Green',   value: 'green' 	},
										{ text: 'Orange',  value: 'orange'  },
										{ text: 'Red', 		 value: 'red'		  }
									]
								}
							],
							onsubmit: function( e ) {
								editor.insertContent(
									'[ruven_info_box style="' + e.data.style + '"] ' +
										e.data.content +
									' [/ruven_info_box]'
								);
							}
						});
					}
				}, // END Info Box


				/* Spacer
				------------------------------------------------------------ */
				{
					text: 'Spacer',
					onclick: function() {
						editor.windowManager.open( {
							title: 'Insert Spacer Shortcode',
							body: [
								{
									type: 'listbox',
									name: 'size',
									label: 'Size',
									'values': [
										{ text: 'Small',  value: 'small'  },
										{ text: 'Medium', value: 'medium' },
										{ text: 'Large',  value: 'large'  }
									]
								}
							],
							onsubmit: function( e ) {
								editor.insertContent(
									'[ruven_spacer size="' + e.data.size  + '"]'
								);
							}
						});
					}
				}, // END Spacer


			]
		});
	});
})();